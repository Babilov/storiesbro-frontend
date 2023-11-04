import { Box, Button, Typography } from "@mui/material";
import React from "react";

import check from "../../../images/profileImages/passwordIcons/check.svg";
import MyButton from "../../UI/buttons/MyButton";

const ProfilePassword = () => {
  const date = "17:30 05.06.2023";
  return (
    <Box sx={{ width: "50%" }}>
      <Box
        sx={{
          border: "1px solid #CBCBCB",
          borderRadius: "10px",
          display: "flex",
          alignItems: "self-start",
          p: "15px 180px 15px 15px",
        }}
      >
        <Box component="img" alt="check" src={check} sx={{ mr: 3 }} />
        <Typography>Ваш пароль установлен {date}</Typography>
      </Box>
      <Box sx={{ display: "flex", width: "45%", m: "8px auto" }}>
        <MyButton options={{ background: "#E68B46", color: "white", mr: 1 }}>
          Изменить
        </MyButton>
      </Box>
    </Box>
  );
};

export default ProfilePassword;
