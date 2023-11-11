import { Box, Container, Grid } from "@mui/material";
import React from "react";
import HelpSteps from "../../../../components/authorizedAdmin/helpSteps/HelpSteps";
import PublicRequirements from "../../../../components/authorizedAdmin/publicRequirements/PublicRequirements";
import ClosingBlock from "../../../../components/authorizedAdmin/closingBlock/ClosingBlock";
import ContentVideos from "../../../../components/authorizedAdmin/contentVideos/ContentVideos";
import OwnVideosInstruction from "../../../../components/authorizedAdmin/ownVideosInstruction/OwnVideosInstruction";
import HowToIncrease from "../../../../components/authorizedAdmin/howToIncrease/HowToIncrease";
import AuthorizedAdminMenu from "../../../../components/authorizedAdmin/menu/AuthorizedAdminMenu";
import AuthorizedUserHeader from "../../../../components/authorizedUser/authorizedUserHeader/AuthorizedUserHeader";

const AuthorizedAdminHelp = () => {
  return (
    <Grid container>
      <Container>
        <AuthorizedUserHeader ismainpage={false} />
        <Grid container>
          <Grid item lg={2} xs={0}>
            <AuthorizedAdminMenu />
          </Grid>
          <Grid item md={10}>
            <HelpSteps />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <PublicRequirements />
          <ClosingBlock />
          <ContentVideos />
          <OwnVideosInstruction />
          <HowToIncrease />
        </Grid>
      </Container>
    </Grid>
  );
};

export default AuthorizedAdminHelp;
