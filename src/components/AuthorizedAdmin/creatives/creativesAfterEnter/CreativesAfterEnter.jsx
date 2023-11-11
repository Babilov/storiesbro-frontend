import React, { useContext, useState } from "react";

import "./styles/style.css";
import Table from "./table/Table";
import AddPublicButton from "./buttons/AddPublicButton";
import { PublicsContext } from "../../../../context/PublicsContext";
import { Grid } from "@mui/material";
import DeletePublicModal from "./table/modals/DeletePublicModal";
import AddPublicModal from "./table/modals/AddPublicModal";

const CreativesAfterEnter = () => {
  const [publics, setPublics] = useContext(PublicsContext);
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <Grid item xs={12}>
      <AddPublicModal open={openAdd} setOpen={setOpenAdd} />
      <AddPublicButton setOpen={setOpenAdd} />
      <Table publics={publics} setPublics={setPublics} />
    </Grid>
  );
};

export default CreativesAfterEnter;
