import React, { useState } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import OrangeButton from "../UI/buttons/OrangeButton";
import logo from "../../images/icons/commonIcons/logo.svg";
import humanProfile from "../../images/icons/humanProfile.svg";
import SideBar from "../UI/sidebars/SideBar";

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", p: "0 130px" }}
    >
      <SideBar open={open} setOpen={setOpen} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MenuIcon sx={{ mr: 5, cursor: "pointer" }} />
        <Box component="img" alt="logo" src={logo} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "15%",
        }}
      >
        <OrangeButton>Пополнить</OrangeButton>
        <Box>0р</Box>
        <Box component="img" alt="prfile" src={humanProfile} />
      </Box>
    </Box>
  );
};

export default ProfileHeader;
