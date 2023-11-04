import { Switch } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const Switcher = () => {
  const [isCustomer, setIsCustomer] = useContext(Context);
  return (
    <Switch checked={!isCustomer} onClick={() => setIsCustomer(!isCustomer)} />
  );
};

export default Switcher;
