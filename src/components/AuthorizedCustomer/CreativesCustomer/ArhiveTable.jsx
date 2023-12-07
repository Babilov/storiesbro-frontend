import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ArhiveTable = ({ arhive }) => {
  return arhive.map((creative) => (
    <Grid
      container
      className="alignCenter"
      key={creative["id"]}
      sx={{ borderTop: "1px solid #CDCDCD" }}
    >
      <Grid item md={1}>
        <Box component="img" alt="img" src={creative["image"]} />
      </Grid>

      <Grid item md={2}>
        <Typography className="mdSizeText">{creative["date"]}</Typography>
      </Grid>

      <Grid item md={2}>
        <Typography className="mdSizeText">{creative["title"]}</Typography>
      </Grid>

      <Grid item md={2}>
        <Typography
          className="mdSizeText"
          sx={{
            color:
              creative["status"] === "Активен"
                ? "#4CD640"
                : creative["status"] === "Не прошел проверку"
                ? "#D25D48"
                : "black",
          }}
        >
          {creative["status"]}
        </Typography>
      </Grid>

      <Grid item md={5} className="mdSizeText spaceAround">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          className="mdSizeText"
          to={`/creatives/${creative["id"]}`}
        >
          Открыть
        </Link>

        <Link
          to={`/creatives/statistic/${creative["id"]}`}
          className="mdSizeText"
          style={{ textDecoration: "none", color: "black" }}
        >
          Статистика
        </Link>

        <Typography className="mdSizeText">Убрать</Typography>
      </Grid>
    </Grid>
  ));
};

export default ArhiveTable;
