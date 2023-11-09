import { Divider, Grid, Typography, Box } from "@mui/material";
import React from "react";

const Table = ({ publics }) => {
  return (
    <Box
      sx={{ border: "1px solid #CDCDCD", borderRadius: "10px", p: "0 25px" }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          p: 2,
        }}
        className="adminTitles"
      >
        <Grid item xs={3}>
          <Typography variant="h4">Сообщество</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">Название</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h4">Статус</Typography>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Divider />
      {publics.map((publicObj, index) => (
        <Grid
          container
          className="adminPublics"
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #CDCDCD",
            pt: 1,
            pb: 1,
          }}
        >
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" alt="img" src={publicObj["image"]} />
          </Grid>

          <Grid item xs={3}>
            <Typography>{publicObj["title"]}</Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography>{publicObj["status"]}</Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Настройки</Typography>
            <Typography>|</Typography>
            <Typography>Удалить</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Table;
