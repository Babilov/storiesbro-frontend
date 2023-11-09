import { Button } from "@mui/material";
import React from "react";

const MyButton = ({ children, options, onClick }) => {
  return (
    <Button
      fullWidth
      onClick={onClick}
      sx={{
        background: options["background"],
        color: options["color"],
        borderRadius: options["borderRadius"]
          ? options["borderRadius"]
          : "10px",
        border: options["border"],
        mr: options["mr"],
        ":hover": {
          filter: "brightness(120%)",
          background: options["background"],
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
