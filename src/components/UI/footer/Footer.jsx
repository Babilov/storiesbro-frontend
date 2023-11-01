import React from "react";
import { Box, Typography } from "@mui/material";

import logo from "../../../images/icons/logo.svg";
import vkBlack from "../../../images/icons/vkBlack.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "83px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Box component="img" alt="logo" src={logo} sx={{ mr: 1 }} />
        <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
          ©2023 Storisbro. Все права защищены
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "83px",
          fontWeight: 400,
          fontSize: "18px",
        }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
          Правила пользования
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
          Пользовательское соглашение
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
          Наши соцсети
        </Typography>
        <Box component="img" alt="vk" src={vkBlack} />
      </Box>
    </Box>
  );
};

export default Footer;
