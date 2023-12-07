import React from "react";
import { Box, FormControl, InputLabel, Select } from "@mui/material";
import MyDropZone from "../../../UI/myDropZone/MyDropZone";
import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/buttons/MyButton";

const SingleStori = (e) => {
  return (
    <Box>
      <Box className="justifyCenter">
        <MyDropZone />
        <Box sx={{ width: { md: "20%", xs: "100%" }, ml: 2 }}>
          <FormControl fullWidth sx={{ mb: 1 }}>
            <InputLabel id="demo-simple-select-label">
              Выберите кнопку
            </InputLabel>
            <Select sx={{ borderRadius: "10px" }} />
          </FormControl>
          <MyInput label="Введите ссылку" />
          <MyInput label="Введите название" />
        </Box>
      </Box>
      <Box sx={{ width: { md: "20%", xs: "60%" }, m: "40px auto" }}>
        <MyButton options={{ background: "#4CD640" }}>Загрузить</MyButton>
      </Box>
    </Box>
  );
};

export default SingleStori;
