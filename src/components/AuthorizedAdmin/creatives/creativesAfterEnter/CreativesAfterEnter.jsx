import React, { useContext } from "react";

import "./styles/style.css";
import Table from "./table/Table";
import AddPublicButton from "./buttons/AddPublicButton";
import { PublicsContext } from "../../../../context/PublicsContext";

const CreativesAfterEnter = () => {
  const publics = useContext(PublicsContext);

  return (
    <>
      <AddPublicButton />
      <Table publics={publics} />
    </>
  );
};

export default CreativesAfterEnter;
