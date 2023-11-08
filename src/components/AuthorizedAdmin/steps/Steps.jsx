import React from "react";
import { Box, Typography } from "@mui/material";
import stepsImg from "./images/stepsImg.png";

const Steps = () => {
  const FONT_SIZE_XL = "38px";
  const FONT_WEIGHT_XL = 600;
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: FONT_SIZE_XL,
          fontWeight: FONT_WEIGHT_XL,
          width: "50%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        Как{" "}
        <Typography
          component="span"
          className="orange"
          sx={{ fontSize: FONT_SIZE_XL, fontWeight: FONT_WEIGHT_XL }}
        >
          заказать
        </Typography>{" "}
        рекламу на платформе
      </Typography>
      <Box component="img" src={stepsImg} sx={{ width: "100%" }} />;
    </Box>
  );
};

export default Steps;
