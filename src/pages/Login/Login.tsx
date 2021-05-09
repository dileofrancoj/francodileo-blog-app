import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import InputValidationMessage from "../../components/InputValidationMessage";
import { iLogin } from "../../types/Login";
import { AuthContext } from "../../contexts/auth";
import { useHistory } from "react-router-dom";

const LoginRow = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginButton = styled(Button)`
  margin-top: 0.5em;
  width: 100%;
`;

const AuthenticationFail = styled(Alert)`
  font-weight: bold;
  text-align: center;
  margin-top: 0.5em;
  padding: 0.4em;
`;

const Login: React.FC = () => {
  const [authFail, setAuthFail] = useState<boolean>(false);
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>();

  const auth = (data: iLogin) => {
    const isLoggedIn: boolean = login(data);
    if (isLoggedIn) history.push("/admin");
    setAuthFail(true);
  };

  return (
    <Container>
      <LoginRow>
        <Col md={5} sm={12}>
          <Form onSubmit={handleSubmit(auth)}>
            <Form.Group>
              <Form.Label>Usuario *</Form.Label>
              <Form.Control placeholder="Usuario" {...register("username")} />
              {errors?.username && (
                <InputValidationMessage description="Campo obligatorio" />
              )}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password * </Form.Label>
              <Form.Control
                type="password"
                placeholder="********"
                {...register("password")}
              />
              {errors?.username && (
                <InputValidationMessage description="Campo obligatorio" />
              )}
            </Form.Group>
            {authFail && (
              <AuthenticationFail variant="danger">
                Usuario o contraseña incorrectos
              </AuthenticationFail>
            )}
            <LoginButton type="submit">Ingresar</LoginButton>
          </Form>
        </Col>
      </LoginRow>
    </Container>
  );
};

export default Login;
