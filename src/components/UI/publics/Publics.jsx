import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import tolMems from "../../../images/adminPublics/tolMems.svg";
import guides from "../../../images/adminPublics/guides.svg";
import mailRofls from "../../../images/adminPublics/mailRofls.svg";
import honeyAge from "../../../images/adminPublics/honeyAge.svg";
import memPic from "../../../images/adminPublics/memPic.svg";
import thisUser from "../../../images/adminPublics/thisUser.svg";
import packet from "../../../images/adminPublics/packet.svg";
import veselchak from "../../../images/adminPublics/veselchak.svg";
import jest from "../../../images/adminPublics/jest.svg";
import memCat from "../../../images/adminPublics/memCat.svg";
import limit from "../../../images/adminPublics/limit.svg";
import perepison from "../../../images/adminPublics/perepison.svg";

const publics = {};
publics[tolMems] = ["Толерантные мемы", "105.000"];
publics[guides] = ["Гайды на все случаи жизни", "708.000"];
publics[mailRofls] = ["Рофлим с mail.ru", "223.000"];
publics[honeyAge] = ["Сладкий возраст", "349.000"];
publics[memPic] = ["Мемные картиночки", "172.000"];
publics[thisUser] = ["Этот пользователь", "908.000"];
publics[packet] = ["ПАКЕТ", "109.000"];
publics[veselchak] = ["Весельчак", "629.000"];
publics[jest] = ["Жесть", "139.000"];
publics[memCat] = ["Мемные коты", "175.000"];
publics[limit] = ["ЛИМИТ", "323.000"];
publics[perepison] = ["Переписон", "540.000"];

const Publics = ({ title }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: "32px",
          fontWeight: 600,
          textAlign: "center",
          m: "50px 0 35px",
        }}
      >
        {title.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(publics).map((image, index) => (
          <Grid
            item
            xs={2}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Box component="img" alt="public" src={image} />
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "22px" }}
            >
              {publics[image][0]}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                fontSize: "22px",
                background: "#E37E31",
                color: "white",
                borderRadius: "20px",
              }}
            >
              {publics[image][1]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Publics;
