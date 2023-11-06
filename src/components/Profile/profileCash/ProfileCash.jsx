import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import ProfileCashButton from "./ProfileCashButton";

const ProfileCash = () => {
  const [cash, setCash] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "18px", mr: 2 }}>
          Баланс
        </Typography>
        <MyInput value={cash} disabled={true} />
        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>₽</Typography>
      </Box>
      <Box sx={{ mr: 20, display: "flex", width: "40%" }}>
        <ProfileCashButton
          to="/cash/deposit"
          text="Пополнить"
          background="#E68B46"
          color="white"
        />
        <ProfileCashButton
          to="/cash/get-money"
          text="Вывести"
          background="white"
          color="#E68B46"
          border="1px solid #E68B46"
        />
      </Box>
    </Box>
  );
};

export default ProfileCash;
