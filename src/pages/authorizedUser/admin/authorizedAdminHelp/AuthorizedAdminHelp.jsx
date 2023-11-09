import { Box, Grid } from "@mui/material";
import React from "react";
import HelpSteps from "../../../../components/authorizedAdmin/helpSteps/HelpSteps";
import PublicRequirements from "../../../../components/authorizedAdmin/publicRequirements/PublicRequirements";
import ClosingBlock from "../../../../components/authorizedAdmin/closingBlock/ClosingBlock";

const AuthorizedAdminHelp = () => {
  return (
    <>
      <Grid item xs={10}>
        <HelpSteps />
      </Grid>
      <PublicRequirements />

      <ClosingBlock />
    </>
  );
};

export default AuthorizedAdminHelp;
