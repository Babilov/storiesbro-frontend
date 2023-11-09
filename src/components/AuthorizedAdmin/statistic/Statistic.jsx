import React, { useContext, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import PublicSelect from "./selects/PublicSelect";
import PeriodSelect from "./selects/PeriodSelect";
import DataPickers from "./dataPickers/DataPickers";
import MyButton from "../../UI/buttons/MyButton";
import { PublicsContext } from "../../../context/PublicsContext";
import Table from "./table/Table";

const Statistic = () => {
  const [open, setOpen] = useState(false);
  const publics = useContext(PublicsContext);
  const statistic = [
    {
      publicTitle: "Гонки",
      date: "04.07.2023",
      views: "259.000",
      money: 5180,
    },
    {
      publicTitle: "Гонки",
      date: "03.07.2023",
      views: "271.000",
      money: 5420,
    },
    {
      publicTitle: "Гонки",
      date: "02.07.2023",
      views: "223.000",
      money: 4460,
    },
  ];

  return (
    <>
      <Grid item xs={6} sx={{ m: "0 auto" }}>
        <PublicSelect publics={publics} />
        <DataPickers />
        <PeriodSelect />

        <Box sx={{ width: "40%", m: "20px auto" }}>
          <MyButton
            onClick={() => setOpen(true)}
            options={{ background: "#E37E31", color: "white" }}
          >
            <Typography>Показать</Typography>
          </MyButton>
        </Box>
      </Grid>
      <Grid item xs={8} sx={{ m: "50px auto" }}>
        <Table statistic={statistic} open={open} />
      </Grid>
    </>
  );
};

export default Statistic;
