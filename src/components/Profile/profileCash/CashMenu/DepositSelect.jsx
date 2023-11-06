import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DepositSelect = () => {
  const [bank, setBank] = useState("");

  const handleChange = (event) => {
    setBank(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: "33%" }}>
      <InputLabel id="demo-simple-select-standard-label">
        Выберите способ
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={bank}
        onChange={handleChange}
        label="Выберите способ"
      >
        <MenuItem value={"Sberbank"}>Сбербанк</MenuItem>
        <MenuItem value={"Tinkoff"}>Тинькофф</MenuItem>
        <MenuItem value={"Alfabank"}>Афльфабанк</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DepositSelect;
