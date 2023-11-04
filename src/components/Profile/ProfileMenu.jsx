import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./styles/profileStyle.css";

const ProfileMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #CDCDCD",
        borderRadius: "20px",
        width: "68%",
        pl: 1,
        pr: 1,
        pt: "15px",
      }}
    >
      <NavLink className="navLink" to="/profile">
        <PersonIcon sx={{ mr: 1 }} />
        Данные пользователя
      </NavLink>

      <NavLink className="navLink" to="/cash">
        <PaymentsIcon sx={{ mr: 1 }} />
        Пополнение/вывод
      </NavLink>

      <NavLink className="navLink" to="/password">
        <LockIcon sx={{ mr: 1 }} />
        Измененеие пароля
      </NavLink>

      <NavLink className="navLink" to="/alerts">
        <SettingsIcon sx={{ mr: 1 }} />
        Настройка уведомлений
      </NavLink>

      <NavLink className="navLink" to="/history">
        <NotificationsIcon sx={{ mr: 1 }} />
        История уведомлений
      </NavLink>
    </Box>
  );
};

export default ProfileMenu;
