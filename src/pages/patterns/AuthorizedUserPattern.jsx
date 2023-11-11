import { Container, Grid } from "@mui/material";
import React, { useState } from "react";

import cosmetic from "./authorizedUserImages/cosmetic.svg";
import thisUser from "./authorizedUserImages/thisUser.svg";
import pikchi from "./authorizedUserImages/pikchi.svg";
import guides from "./authorizedUserImages/guides.svg";

import AuthorizedUserHeader from "../../components/authorizedUser/authorizedUserHeader/AuthorizedUserHeader";
import AuthorizedAdminMenu from "../../components/authorizedAdmin/menu/AuthorizedAdminMenu";
import { PublicsContext } from "../../context/PublicsContext";

const AuthorizedUserPattern = ({ children, ismainpage }) => {
  const [publics, setPublics] = useState([
    {
      id: 0,
      image: thisUser,
      title: "Этот пользователь",
      status: "На модерации",
    },
    {
      id: 1,
      image: pikchi,
      title: "Пикчи <33",
      status: "Активен",
    },
    {
      id: 2,
      image: guides,
      title: "Гайды",
      status: "Отклонён",
    },
    {
      id: 3,
      image: cosmetic,
      title: "Косметика",
      status: "Выключен",
    },
  ]);
  return (
    <PublicsContext.Provider value={[publics, setPublics]}>
      <Container>
        <AuthorizedUserHeader ismainpage={ismainpage} />
        <Grid container>
          <Grid item lg={2} xs={0}>
            <AuthorizedAdminMenu />
          </Grid>
          <Grid item lg={10} xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </PublicsContext.Provider>
  );
};

export default AuthorizedUserPattern;
