import { Container } from "@mui/material";
import React from "react";
import AuthorizedUserHeader from "../authorizedUser/authorizedUserHeader/AuthorizedUserHeader";

const AuthorizedUserPattern = ({ children }) => {
  return (
    <Container>
      <AuthorizedUserHeader />
      {children}
    </Container>
  );
};

export default AuthorizedUserPattern;
