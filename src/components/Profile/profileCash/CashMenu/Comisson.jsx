import { Badge, Typography } from "@mui/material";
import React from "react";

const Comission = ({ setComissionOpen, isDeposit }) => {
  return isDeposit ? (
    <Badge badgeContent="?" color="warning" sx={{ cursor: "pointer" }}>
      <Typography className="orange" onClick={() => setComissionOpen(true)}>
        Сервисный сбор 5%
      </Typography>
    </Badge>
  ) : (
    <Typography className="orange">Комиссия сервиса 20%</Typography>
  );
};

export default Comission;
