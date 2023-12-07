import React, { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";

import { CreativesContext } from "../../../context/CreativesContext";
import MyButton from "../../UI/buttons/MyButton";

const CreativeDetail = () => {
  const [creatives] = useContext(CreativesContext);

  const { id } = useParams();

  const creative = creatives[id];

  return (
    <Box
      className="grid"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography className="title">“{creative["title"]}”</Typography>
      <Box
        component="img"
        alt="creative"
        src={creative["image"]}
        sx={{ width: "20%" }}
      />
      <Paper sx={{ p: 1.5 }}>
        <Link target="_blank" to={creative["link"]}>
          {creative["link"]}
        </Link>
      </Paper>

      <Box sx={{ width: "20%", mt: 2 }}>
        <MyButton options={{ background: "#E37E31" }}>Посмотреть</MyButton>
      </Box>
    </Box>
  );
};

export default CreativeDetail;
