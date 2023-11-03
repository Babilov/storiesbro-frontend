import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";

import Switcher from "../switcher/Switcher";
import "../../../styles/font.css";
import "../../../styles/colors.css";
import logo from "../../../images/icons/logo.svg";
import blackLogo from "../../../images/icons/blackLogo.svg";
import enter from "../../../images/icons/enter.svg";
import { Context } from "../../../context/Context";

const Header = ({ setIsLoginFormOpen }) => {
  const [isAdmin, _] = useContext(Context);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "none",
        background: isAdmin ? "#161616" : "white",
      }}
    >
      <Grid
        item
        component="img"
        alt="logo"
        src={isAdmin ? blackLogo : logo}
        sx={{
          height: { xs: "50px", sm: "95px" },
          width: { xs: "30px", sm: "60px" },
        }}
        order={{ xs: 2, sm: 1 }}
      />
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          color: "black",
          justifyContent: "center",
          height: { xs: "50px", sm: "auto" },
          background: {
            xs: isAdmin ? "#292929" : "#FBECE0",
            sm: isAdmin ? "#161616" : "white",
          },
        }}
        order={{ xs: 1, sm: 2 }}
        xs={12}
        sm={8}
      >
        <Typography
          sx={{
            fontSize: { sm: "22px", xs: "15px" },
            fontWeight: 500,
            color: isAdmin && "white",
          }}
        >
          Заказчикам
        </Typography>
        <Switcher />
        <Typography
          sx={{
            fontSize: { sm: "22px", xs: "15px" },
            fontWeight: 500,
            color: isAdmin && "white",
          }}
        >
          Владельцам сообществ
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => setIsLoginFormOpen(true)}
        order={{ xs: 3, sm: 3 }}
      >
        <Typography
          className="orange"
          sx={{ fontSize: { sm: "22px", xs: "15px" }, fontWeight: 500, mr: 1 }}
        >
          Войти
        </Typography>
        <Box
          component="img"
          alt="enter"
          src={enter}
          sx={{
            width: { xs: "15px", sm: "35px" },
            height: { xs: "15px", sm: "36px" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
