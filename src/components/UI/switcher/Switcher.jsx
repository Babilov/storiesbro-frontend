import { Switch } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const Switcher = () => {
  const [isAdmin, setIsAdmin] = useContext(Context);
  return <Switch checked={!isAdmin} onClick={() => setIsAdmin(!isAdmin)} />;
};

export default Switcher;
