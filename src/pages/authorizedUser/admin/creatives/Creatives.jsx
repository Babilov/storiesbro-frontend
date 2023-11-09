import { Box } from "@mui/material";
import React, { useState } from "react";
import CreativessBeforeEnter from "../../../../components/authorizedAdmin/creatives/creativesBefoteEnter/CreativessBeforeEnter";
import CreativesAfterEnter from "../../../../components/authorizedAdmin/creatives/creativesAfterEnter/CreativesAfterEnter";

const Creatives = () => {
  const [authed, setAuthed] = useState(false);

  return (
    <>
      {!authed ? (
        <CreativessBeforeEnter setAuthed={setAuthed} />
      ) : (
        <CreativesAfterEnter />
      )}
    </>
  );
};

export default Creatives;
