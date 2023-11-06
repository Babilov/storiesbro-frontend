import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const GetMoneyTable = ({ operations }) => {
  return (
    <Grid
      container
      sx={{
        textAlign: "center",
        border: "1px solid #CDCDCD",
        borderRadius: "20px",
        pl: 3,
        pr: 3,
        pt: 1,
      }}
    >
      <Grid item xs={4}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>UUID</Typography>
        <Divider sx={{ mt: 1 }} />
      </Grid>
      <Grid item xs={3}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          Реквизиты
        </Typography>
        <Divider sx={{ mt: 1 }} />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>Дата</Typography>
        <Divider sx={{ mt: 1 }} />
      </Grid>
      <Grid item xs={1}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          Сумма
        </Typography>
        <Divider sx={{ mt: 1 }} />
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          Статус
        </Typography>
        <Divider sx={{ mt: 1 }} />
      </Grid>
      {operations.map((operation, index) => (
        <Grid container key={index} sx={{ pt: 5 }}>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: "18px" }}>
              {operation["uuid"]}
            </Typography>
            <Divider sx={{ mt: 5 }} />
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ fontSize: "18px" }}>
              {operation["requisites"]}
            </Typography>
            <Divider sx={{ mt: 5 }} />
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ fontSize: "18px" }}>
              {operation["date"]}
            </Typography>
            <Divider sx={{ mt: 5 }} />
          </Grid>
          <Grid item xs={1}>
            <Typography sx={{ fontSize: "18px" }}>
              {operation["money"]}₽
            </Typography>
            <Divider sx={{ mt: 5 }} />
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ fontSize: "18px" }}>
              {operation["status"]}
            </Typography>
            <Divider sx={{ mt: 5 }} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default GetMoneyTable;
