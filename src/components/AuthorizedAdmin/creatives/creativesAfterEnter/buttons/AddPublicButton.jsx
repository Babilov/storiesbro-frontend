import { Box, Typography } from "@mui/material";
import React from "react";

import vk from "../images/vk.svg";
import MyButton from "../../../../UI/buttons/MyButton";

const AddPublicButton = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Box
        sx={{
          width: "30%",
          mb: 2,
        }}
      >
        <MyButton
          options={{
            background: "white",
            color: "black",
            border: "2px solid #0077FF",
            borderRadius: "90px",
          }}
        >
          <Typography>Добавить сообщество</Typography>
          <Box component="img" alt="vk" src={vk} />
        </MyButton>
      </Box>
    </Box>
  );
};

export default AddPublicButton;
