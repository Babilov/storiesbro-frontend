import React from "react";

import "../../../styles/border.css";
import "../../../styles/colors.css";
import { Box, Typography } from "@mui/material";

const Buffet = ({ quote, person, image }) => {
  return (
    <Box
      className="orangeBorder"
      sx={{
        display: "flex",
        alignItems: "center",
        p: "40px 40px 0",
        mt: 5,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          {quote}
        </Typography>
        <Typography className="orange">{person}</Typography>
      </Box>

      <Box component="img" src={image} alt="Buffet" sx={{ fontSize: "18px" }} />
    </Box>
  );
};

export default Buffet;
