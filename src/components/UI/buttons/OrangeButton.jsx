import { Button } from "@mui/material";
import React from "react";

const OrangeButton = ({ children }) => {
  return (
    <Button
      sx={{
        background: "#E68B46",
        color: "white",
        ":hover": {
          filter: "brightness(120%)",
          background: "#E68B46",
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default OrangeButton;
