import { useContext } from "react";
import { Box } from "@mui/material";

import logo from "../../../images/icons/logo.svg";
import blackLogo from "../../../images/icons/blackLogo.svg";

const FooterImage = ({ isAdmin }) => {
  return (
    <Box
      component="img"
      alt="logo"
      src={isAdmin ? blackLogo : logo}
      sx={{ mr: 1, width: "50%" }}
    />
  );
};

export default FooterImage;
