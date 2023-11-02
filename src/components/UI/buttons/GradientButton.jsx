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
        height: { sx: "50px", sm: "72px" },
        borderRadius: "90px",
        color: "white",
        fontSize: { xs: "16px", sm: "26px" },
        fontWeight: 600,
        background: disabled && "#CBCBCB",
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
