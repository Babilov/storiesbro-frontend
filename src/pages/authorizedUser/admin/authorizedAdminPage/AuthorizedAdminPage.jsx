import React from "react";
import { Grid } from "@mui/material";

import Steps from "../../../../components/authorizedAdmin/steps/Steps";
import Advices from "../../../../components/authorizedAdmin/advices/Advices";

const AuthorizedAdminPage = () => {
  return (
    <Grid item md={10} xs={12}>
      <Steps />
      <Advices />
    </Grid>
  );
};

export default AuthorizedAdminPage;
