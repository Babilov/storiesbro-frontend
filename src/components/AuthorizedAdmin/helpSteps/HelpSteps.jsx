import { Box, Typography } from "@mui/material";
import React from "react";

import helpSteps from "./images/steps.png";

const HelpSteps = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 600,
          position: "absolute",
          width: "50%",
        }}
      >
        Как{" "}
        <Typography
          sx={{ fontSize: "32px", fontWeight: 600 }}
          component="span"
          className="orange"
        >
          монетизировать
        </Typography>{" "}
        сообщество?
      </Typography>
      <Box component="img" alt="steps" src={helpSteps} />
    </Box>
  );
};

export default HelpSteps;
