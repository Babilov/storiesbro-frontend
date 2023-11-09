import { Container, Grid } from "@mui/material";
import React from "react";

import cosmetic from "./authorizedUserImages/cosmetic.svg";
import thisUser from "./authorizedUserImages/thisUser.svg";
import pikchi from "./authorizedUserImages/pikchi.svg";
import guides from "./authorizedUserImages/guides.svg";

import AuthorizedUserHeader from "../../components/authorizedUser/authorizedUserHeader/AuthorizedUserHeader";
import AuthorizedAdminMenu from "../../components/authorizedAdmin/menu/AuthorizedAdminMenu";
import { PublicsContext } from "../../context/PublicsContext";

const AuthorizedUserPattern = ({ children, ismainpage }) => {
  const publics = [
    {
      image: thisUser,
      title: "Этот пользователь",
      status: "На модерации",
    },
    {
      image: pikchi,
      title: "Пикчи <33",
      status: "Активен",
    },
    {
      image: guides,
      title: "Гайды",
      status: "Отклонён",
    },
    {
      image: cosmetic,
      title: "Косметика",
      status: "Выключен",
    },
  ];
  return (
    <PublicsContext.Provider value={publics}>
      <Container>
        <AuthorizedUserHeader ismainpage={ismainpage} />
        <Grid container>
          <Grid item xs={2}>
            <AuthorizedAdminMenu />
          </Grid>
          {children}
        </Grid>
      </Container>
    </PublicsContext.Provider>
  );
};

export default AuthorizedUserPattern;
