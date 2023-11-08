import { Grid } from "@mui/material";
import React from "react";
import Steps from "../../components/AuthorizedAdmin/steps/Steps";
import AuthorizedAdminMenu from "../../components/AuthorizedAdmin/menu/AuthorizedAdminMenu";
import Advices from "../../components/AuthorizedAdmin/advices/Advices";

const AuthorizedAdminPage = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <AuthorizedAdminMenu />
      </Grid>
      <Grid item xs={10}>
        <Steps />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={10}>
        <Advices />
      </Grid>
    </Grid>
  );
};

export default AuthorizedAdminPage;
