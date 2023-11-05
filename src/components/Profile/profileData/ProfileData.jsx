import { Box } from "@mui/material";
import React from "react";
import ProfileNmae from "./ProfileName";
import ProfileEmail from "./ProfileEmail";
import ProfileButton from "./ProfileButton";

const ProfileData = () => {
  return (
    <Box sx={{ width: "40%" }}>
      <ProfileNmae />
      <ProfileEmail />
      <ProfileButton />
    </Box>
  );
};

export default ProfileData;
