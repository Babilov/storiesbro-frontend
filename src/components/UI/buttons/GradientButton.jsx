import { Button } from "@mui/material";
import React from "react";

const GradientButton = ({
  children,
  height,
  width,
  xsWidth,
  handleClick,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      fullWidth
      onClick={handleClick}
      className="orangeGradient"
      sx={{
        width: { sm: width, xs: xsWidth },
        height: { sx: "50px", md: "72px" },
        borderRadius: "90px",
        color: "white",
        fontSize: { xs: "16px", md: "26px" },
        fontWeight: 600,
        background: disabled && "#CBCBCB",
        transition: ".3s",
        "&:hover": {
          filter: "brightness(120%)",
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
