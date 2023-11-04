import { Box, Typography } from "@mui/material";
import React from "react";
import MyInput from "../../UI/input/MyInput";

const ProfileData = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
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
          <Box sx={{ width: "45%", ml: 5 }}>
            <MyInput label="Имя" />
          </Box>
          <Box sx={{ width: "45%", ml: 5 }}>
            <MyInput label="Почта" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileData;
