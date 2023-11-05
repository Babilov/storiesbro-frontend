import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import pencil from "../../../images/profileImages/dataIcons/pencil.svg";
import MyInput from "../../UI/input/MyInput";

const ProfileNmae = () => {
  const [name, setName] = useState("Юрий");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>Имя</Typography>
      <Box
        sx={{ width: "65%", display: "flex", alignItems: "center" }}
        onBlur={() => setIsEdit(false)}
      >
        <MyInput
          label="Имя"
          value={name}
          setValue={setName}
          disabled={!isEdit}
        />
        <Box
          component="img"
          alt="pencil"
          src={pencil}
          sx={{ ml: 2, cursor: "pointer" }}
          onClick={() => setIsEdit(true)}
        />
      </Box>
    </Box>
  );
};

export default ProfileNmae;
