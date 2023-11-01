import React from "react";
import MyCarousel from "../myCarousel/MyCarousel";
import { Box, Typography } from "@mui/material";

const Examples = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, fontSize: "32px", textAlign: "center" }}
      >
        Примеры рекламных креативов
      </Typography>
      <MyCarousel />
    </Box>
  );
};

export default Examples;
