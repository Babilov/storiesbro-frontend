import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Switcher from "../switcher/Switcher";
import "../../../styles/font.css";
import "../../../styles/colors.css";
import logo from "../../../images/icons/logo.svg";
import enter from "../../../images/icons/enter.svg";

const Header = ({ setIsLoginFormOpen }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: "white",
        boxShadow: "none",
      }}
    >
      <Grid
        item
        component="img"
        alt="logo"
        src={logo}
        sx={{ width: "59.39px", height: "95px" }}
      />
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          color: "black",
          fontSize: "22px",
        }}
      >
        <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
          Заказчикам
        </Typography>
        <Switcher />
        <Typography sx={{ fontSize: "22px", fontWeight: 500 }}>
          Владельцам сообществ
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => setIsLoginFormOpen(true)}
      >
        <Typography
          className="orange"
          sx={{ fontSize: "22px", fontWeight: 500, mr: 1 }}
        >
          Войти
        </Typography>
        <Box component="img" alt="enter" src={enter} />
      </Grid>
    </Grid>
  );
};

export default Header;
