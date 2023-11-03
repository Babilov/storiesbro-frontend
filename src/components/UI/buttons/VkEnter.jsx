import React, { useContext } from "react";
import { Box, Button } from "@mui/material";

import { Context } from "../../../context/Context";
import vk from "../../../images/icons/vk.svg";

const VkEnter = ({ children }) => {
  const [isAdmin, _] = useContext(Context);
  return (
    <Button
      sx={{
        fontWeight: 600,
        fontSize: { sx: "16px", sm: "26px" },
        color: "black",
        border: `2px solid ${isAdmin ? "white" : "#2A5885"}`,
        borderRadius: "90px",
        padding: "5px 70px",
        background: isAdmin && "white",
      }}
    >
      {children}
      <Box component="img" alt="vk" src={vk} sx={{ width: "20%" }} />
    </Button>
  );
};

export default VkEnter;
