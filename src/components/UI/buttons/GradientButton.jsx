import { Button } from "@mui/material";
import React from "react";

const GradientButton = ({ children, height, width, handleClick, disabled }) => {
  return (
    <Button
      disabled={disabled}
      fullWidth
      onClick={handleClick}
      className="orangeGradient"
      sx={{
        width: { width },
        height: { height },
        borderRadius: "90px",
        color: "white",
        fontSize: "26px",
        fontWeight: 600,
        background: disabled && "#CBCBCB",
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
