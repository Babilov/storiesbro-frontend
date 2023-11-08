import React from "react";
import { Box, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const RightSideBar = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          width: "240px",
          height: "100vh",
          background: "white",
          right: 0,
          pt: 20,
          pl: 2,
          outline: "none",
        }}
      >
        <NavLink
          className="navLink"
          to="/profile"
          onClick={() => setOpen(false)}
        >
          <PersonIcon sx={{ mr: 1 }} />
          Данные пользователя
        </NavLink>

        <NavLink className="navLink" to="/cash" onClick={() => setOpen(false)}>
          <PaymentsIcon sx={{ mr: 1 }} />
          Пополнение/вывод
        </NavLink>

        <NavLink
          className="navLink"
          to="/password"
          onClick={() => setOpen(false)}
        >
          <LockIcon sx={{ mr: 1 }} />
          Измененеие пароля
        </NavLink>

        <NavLink
          className="navLink"
          to="/alerts"
          onClick={() => setOpen(false)}
        >
          <SettingsIcon sx={{ mr: 1 }} />
          Настройка уведомлений
        </NavLink>

        <NavLink
          className="navLink"
          to="/history"
          onClick={() => setOpen(false)}
        >
          <NotificationsIcon sx={{ mr: 1 }} />
          История уведомлений
        </NavLink>
      </Box>
    </Modal>
  );
};

export default RightSideBar;
