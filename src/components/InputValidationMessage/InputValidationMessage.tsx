import styled from "styled-components";

import { iInputValidationMessage } from "../../types/InputValidationMessage";

const Span = styled.span`
  color: red;
  font-weight: bold;
`;
const InputValidationMessage: React.FC<iInputValidationMessage> = ({
  description,
}) => <Span>{description}</Span>;

export default InputValidationMessage;
