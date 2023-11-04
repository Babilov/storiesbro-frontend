import { Box, Typography } from "@mui/material";
import React from "react";
import MyInput from "../UI/input/MyInput";

const ProfileData = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Настройка профиля
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="body1">Имя</Typography>
          <Typography variant="body1">Почта</Typography>
        </Box>

        <Box sx={{ width: "70%" }}>
          <MyInput label="Имя" />
          <MyInput label="Почта" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileData;
