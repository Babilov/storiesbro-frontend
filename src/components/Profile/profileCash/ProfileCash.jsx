import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import OrangeButton from "../../UI/buttons/OrangeButton";
import OrangeBorderButton from "../../UI/buttons/OrangeBorderButton";
import MyButton from "../../UI/buttons/MyButton";

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
        <MyInput value={cash} setValue={setCash} />
        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>₽</Typography>
      </Box>
      <Box sx={{ mr: 20, display: "flex", width: "40%" }}>
        <MyButton options={{ background: "#E68B46", color: "white", mr: 1 }}>
          Пополнить
        </MyButton>
        <MyButton
          options={{
            background: "white",
            color: "#E68B46",
            border: "1px solid #E68B46",
          }}
        >
          Вывести
        </MyButton>
      </Box>
    </Box>
  );
};

export default ProfileCash;
