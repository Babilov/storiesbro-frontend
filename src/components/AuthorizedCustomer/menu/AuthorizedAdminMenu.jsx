import React from "react";
import { Box } from "@mui/material";

import flash from "./images/flash.svg";
import list from "./images/list.svg";
import lock from "./images/lock.svg";
import moneys from "./images/moneys.svg";
import question from "./images/question.svg";
import tagUser from "./images/tagUser.svg";
import MyMenu from "../../UI/menu/MyMenu";

const AuthorizedAdminMenu = () => {
  const links = [
    {
      icon: <Box component="img" src={flash} />,
      linkText: "Креативы",
      linkHref: "/creatives",
    },

    {
      icon: <Box component="img" src={lock} />,
      linkText: "Брони",
      linkHref: "/reservations",
    },

    {
      icon: <Box component="img" src={list} />,
      linkText: "Списки сообществ",
      linkHref: "/publics",
    },

    {
      icon: <Box component="img" src={moneys} />,
      linkText: "Реф. система",
      linkHref: "/referal",
    },

    {
      icon: <Box component="img" src={question} />,
      linkText: "Помощь",
      linkHref: "/help",
    },

    {
      icon: <Box component="img" src={tagUser} />,
      linkText: "Тех. поддержка",
      linkHref: "/support",
    },
  ];
  return <MyMenu links={links} />;
};

export default AuthorizedAdminMenu;
