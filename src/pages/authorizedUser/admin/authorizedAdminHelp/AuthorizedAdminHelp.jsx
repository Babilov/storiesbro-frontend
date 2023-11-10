import { Box, Grid } from "@mui/material";
import React from "react";
import HelpSteps from "../../../../components/authorizedAdmin/helpSteps/HelpSteps";
import PublicRequirements from "../../../../components/authorizedAdmin/publicRequirements/PublicRequirements";
import ClosingBlock from "../../../../components/authorizedAdmin/closingBlock/ClosingBlock";
import ContentVideos from "../../../../components/authorizedAdmin/contentVideos/ContentVideos";
import OwnVideosInstruction from "../../../../components/authorizedAdmin/ownVideosInstruction/OwnVideosInstruction";
import HowToIncrease from "../../../../components/authorizedAdmin/howToIncrease/HowToIncrease";

const AuthorizedAdminHelp = () => {
  return (
    <>
      <Grid item xs={10}>
        <HelpSteps />
      </Grid>
      <PublicRequirements />
      <ClosingBlock />
      <ContentVideos />
      <OwnVideosInstruction />
      <HowToIncrease />
    </>
  );
};

export default AuthorizedAdminHelp;
