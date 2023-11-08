import { Box, Modal, Typography } from "@mui/material";
import React from "react";

import flash from "./sidebarIcons/flash.svg";
import list from "./sidebarIcons/list.svg";
import lock from "./sidebarIcons/lock.svg";
import messageQuestion from "./sidebarIcons/messageQuestion.svg";
import moneys from "./sidebarIcons/moneys.svg";
import tagUser from "./sidebarIcons/tagUser.svg";

const LeftSideBar = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: "240px",
        height: "100vh",
        background: "white",
      }}
    >
      <Box
        sx={{
          background: "white",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          pt: 20,
          pl: 2,
          outline: "none",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box component="img" alt="flash" src={flash} sx={{ mr: 1 }} />
          <Typography>Креативы</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box component="img" alt="lock" src={lock} sx={{ mr: 1 }} />
          <Typography>Брони</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box component="img" alt="list" src={list} sx={{ mr: 1 }} />
          <Typography>Список сообществ</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box component="img" alt="moneys" src={moneys} sx={{ mr: 1 }} />
          <Typography>Реф. система</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            component="img"
            alt="messageQuestion"
            src={messageQuestion}
            sx={{ mr: 1 }}
          />
          <Typography>Помощь</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box component="img" alt="tagUser" src={tagUser} sx={{ mr: 1 }} />
          <Typography>Тех. поддержка</Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default LeftSideBar;
