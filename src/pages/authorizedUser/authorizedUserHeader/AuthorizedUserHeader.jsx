import React, { useState } from "react";
import {
  Box,
  ClickAwayListener,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";

import logo from "./images/logo.svg";
import exit from "./images/exit.svg";
import settings from "./images/settings.svg";
import Switcher from "../../../components/UI/switcher/Switcher";
import MyButton from "../../../components/UI/buttons/MyButton";

const AuthorizedUserHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid item xs={2}>
        <Box component="img" alt="logo" src={logo} />
      </Grid>
      <Grid item xs={8}>
        <Switcher />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <MyButton options={{ background: "#E37E31", color: "white" }}>
          <Link to="/cash" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "white" }}>Пополнить</Typography>
          </Link>
        </MyButton>

        <Typography>0₽</Typography>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <PersonIcon
            onClick={() => setOpen(!open)}
            sx={{ cursor: "pointer" }}
          />
        </ClickAwayListener>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "120%",
            zIndex: 1,
            background: "white",
            border: "1px solid rgba(217, 217, 217, 1)",
            borderRadius: "10px",
            width: "200px",
            display: open ? "block" : "none",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              height: "50px",
            }}
          >
            <Box
              component="img"
              alt="settings"
              src={settings}
              sx={{ mr: 1, ml: 1 }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                cursor: "pointer",
                ":hover": { color: "rgba(227, 126, 49, 1)" },
              }}
              onClick={() => navigate("/profile")}
            >
              Настройки
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
            <Box component="img" alt="exit" src={exit} sx={{ mr: 1, ml: 1 }} />
            <Typography
              sx={{
                fontSize: "16px",
                cursor: "pointer",
                ":hover": { color: "rgba(227, 126, 49, 1)" },
              }}
            >
              Выйти{" "}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthorizedUserHeader;
