import React from "react";
import { Box, Typography } from "@mui/material";

import GradientButton from "../buttons/GradientButton";
import "../../../styles/colors.css";
import "../../../styles/border.css";

const Hero = ({ title, content, buttonText, image }) => {
  return (
    <Box
      className="orangeBorder"
      sx={{
        display: "flex",
        p: "70px 50px",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: { sm: "25px", md: "38px", xs: "18px" },
          }}
        >
          {title.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: "20px", xs: "14px", md: "24px" },
            fontWeight: 400,
            mt: 4,
            mb: 4,
          }}
        >
          {content}
        </Typography>
        <GradientButton width="68%" height="20%">
          {buttonText}
        </GradientButton>
      </Box>
      <Box
        component="img"
        alt="hero"
        src={image}
        sx={{
          width: "36%",
          transition: ".3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

export default Hero;