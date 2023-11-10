import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import instruction from "./images/instruction.png";
import cross from "./images/cross.svg";

const ClosingBlock = () => {
  const [open, setOpen] = useState(true);
  return (
    <Grid
      container
      className="orangeBorder"
      sx={{
        p: 5,
        position: "relative",
        display: open ? "flex" : "none",
        m: "0 auto",
      }}
      columnSpacing={5}
    >
      <Box
        component="img"
        alt="cross"
        src={cross}
        sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
        onClick={() => setOpen(false)}
      />
      <Grid item xs={7} sx={{ mt: 5, mb: 3 }}>
        <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
          Добавьте Storisbro на рабочий стол, чтобы управлять доходом
          максимально быстро и комфортно
        </Typography>
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          1. Выделите ссылку сайта
        </Typography>
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          2. Перенесите её на рабочий стол
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Box
          component="img"
          alt="instruction"
          src={instruction}
          sx={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default ClosingBlock;
