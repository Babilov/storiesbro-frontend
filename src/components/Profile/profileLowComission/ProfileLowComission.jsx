import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import copy from "./images/copy.svg";
import ProfileLinks from "./ProfileLinks";
import ProfileSteps from "./ProfileSteps";

const ProfileLowComission = () => {
  const refUrl = "Storisbro.com/?_ref=2Rh46f3L";
  return (
    <Grid container>
      <ProfileLinks />
      <Grid item md={5} xs={12} sx={{ m: "0 auto" }}>
        <Typography
          variant="h4"
          sx={{ fontSize: "24px", fontWeight: 600, textAlign: "center", mt: 5 }}
        >
          Ваша реферальная ссылка
        </Typography>
        <Box
          sx={{
            border: "1px solid #CBCBCB",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "10px",
            mt: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#2A5885", fontSize: "18px", fontWeight: 400 }}
          >
            {refUrl}
          </Typography>
          <Box
            component="img"
            alt="copy"
            src={copy}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Grid>

      <ProfileSteps />
    </Grid>
  );
};

export default ProfileLowComission;
