import { Box, Button, Typography } from "@mui/material";
import React from "react";
import VkEnter from "../buttons/VkEnter";

const CallToAction = () => {
  return (
    <Box
      sx={{
        background: "#FBECE0",
        paddingLeft: "3000px",
        marginLeft: "-3000px",
        paddingRight: "3000px",
        marginRight: "-3000px",
        textAlign: "center",
        pt: 5,
        pb: 5,
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: "32px", mb: 3 }}>
        Остались вопросы или сомнения?
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: "24px", mb: 3 }}>
        Напишите нам, ведь наша команда готова помочь и предоставить Вам все
        необходимые ответы и уверенность в принятии решения.
      </Typography>
      <VkEnter>Написать</VkEnter>
    </Box>
  );
};

export default CallToAction;
