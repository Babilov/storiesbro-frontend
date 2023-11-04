import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MyButton from "../../UI/buttons/MyButton";
import profileVk from "../../../images/profileImages/alertsIcons/profileVk.svg";

const Vk = () => {
  const handleClick = () => {
    setVkActive(!vkActive);
  };

  const [vkActive, setVkActive] = useState(false);
  const vkId = "@kir_i4o";

  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          border: "1px solid #CBCBCB",
          borderRadius: "10px",
          p: "24px 35px 24px 12px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box component="img" alt="vk" src={profileVk} sx={{ mr: 1 }} />
          <Box sx={{ display: "flex", flexDirection: "column", width: "200%" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
              Вконтакте
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              На аккаунт{" "}
              <Typography
                component="span"
                className="orange"
                sx={{ fontSize: "14px", fontWeight: 400 }}
              >
                {vkId}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "50%" }}>
          <MyButton
            onClick={handleClick}
            options={
              !vkActive
                ? { background: "#4CD640", color: "white", mr: 2 }
                : { background: "#D25D48", color: "white", mr: 2 }
            }
          >
            {!vkActive ? "Включить" : "Отключить"}
          </MyButton>
          <MyButton
            options={{
              background: "white",
              color: "#E37E31",
              border: "1px solid #E37E31",
            }}
          >
            Тестовое смс
          </MyButton>
        </Box>
      </Box>
      <Box sx={{ width: "20%", mt: 2 }}>
        <MyButton options={{ background: "#E37E31", color: "white" }}>
          Добавить аккаунт
        </MyButton>
      </Box>
    </Box>
  );
};

export default Vk;
