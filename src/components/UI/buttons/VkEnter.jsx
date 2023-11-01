import React from "react";

import vk from "../../../images/icons/vk.svg";
import { Box, Button } from "@mui/material";

const VkEnter = ({ children }) => {
  return (
    <Button
      sx={{
        fontWeight: 600,
        fontSize: "26px",
        color: "black",
        border: "2px solid #2A5885",
        borderRadius: "90px",
        padding: "5px 70px",
      }}
    >
      {children}
      <Box component="img" alt="vk" src={vk} />
    </Button>
  );
};

export default VkEnter;
