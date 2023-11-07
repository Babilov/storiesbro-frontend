import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProfileHeader from "../../components/Profile/profileHeader/ProfileHeader";
import ProfileMenu from "../../components/Profile/profileMenu/ProfileMenu";

const Profile = ({ children, title }) => {
  return (
    <>
      <ProfileHeader />
      <Container>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs={0} lg={2.5}>
            <ProfileMenu />
          </Grid>
          <Grid item lg={9.5} xs={12}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontSize: { md: "38px", xs: "18px" },
                fontWeight: 600,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              {title}
            </Typography>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
