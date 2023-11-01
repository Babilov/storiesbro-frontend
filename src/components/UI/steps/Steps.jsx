import React from "react";
import { Box, Typography } from "@mui/material";

import Scrooge from "../../../images/Scrooge.svg";
import GradientButton from "../buttons/GradientButton";

const Steps = ({ title, steps, buttonText }) => {
  return (
    <Box
      className="orangeBorder"
      sx={{
        width: "100%",
        p: 5,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "32px", fontWeight: 600, mt: 8 }}>
        {title}
      </Typography>
      <Box sx={{ mb: 10 }}>
        {steps.map((step, index) => (
          <Typography key={index} sx={{ fontSize: "24px", fontWeight: 400 }}>
            {index + 1}. {step}
          </Typography>
        ))}
      </Box>
      <GradientButton width="390px" height="72px">
        {buttonText}
      </GradientButton>
      <Box
        component="img"
        alt="scroodge"
        src={Scrooge}
        sx={{ position: "absolute", right: 0, bottom: 0 }}
      />
    </Box>
  );
};

export default Steps;
