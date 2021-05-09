import React from "react";
import { Routes } from "./routes/Routes";
import { AuthProvider } from "./contexts/auth";

import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
