import { Container, Grid } from "@mui/material";
import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileMenu from "../components/Profile/ProfileMenu";

const Profile = ({ children }) => {
  return (
    <>
      <ProfileHeader />
      <Container>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={2.5}>
            <ProfileMenu />
          </Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
