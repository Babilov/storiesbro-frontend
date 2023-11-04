import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProfileHeader from "../components/Profile/profileHeader/ProfileHeader";
import ProfileMenu from "../components/Profile/profileMenu/ProfileMenu";

const Profile = ({ children, title }) => {
  return (
    <>
      <ProfileHeader />
      <Container>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={2.5}>
            <ProfileMenu />
          </Grid>
          <Grid item xs={9.5}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontSize: "38px", fontWeight: 600 }}
            >
              {title}
            </Typography>
            <Box>{children}</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
