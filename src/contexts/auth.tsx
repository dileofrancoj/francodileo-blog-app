import React, { createContext, useEffect, useState } from "react";
import { iLogin } from "../types/Login";
import { iAuth, defaultState } from "../types/Auth";
import { mockAuth } from "../mocks/auth";

type ContextType = {
  auth: iAuth;
  login: (user: iLogin) => boolean;
  logout: () => void;
};

const defaultContext: ContextType = {
  auth: defaultState,
  login: (): boolean => {
    return false;
  },
  logout: () => {},
};

export const AuthContext = createContext<ContextType>(defaultContext);
const { Provider } = AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<iAuth>(defaultState);

  const logout = (): void => {
    setAuth(defaultState);
  };

  const login = (user: iLogin): boolean => {
    if (user.username === "dileofrancoj" && user.password === "1234") {
      const authObject: iAuth = mockAuth;
      setAuth(authObject);
      return true;
    }
    return false;
  };
  return <Provider value={{ auth, logout, login }}>{children}</Provider>;
};
