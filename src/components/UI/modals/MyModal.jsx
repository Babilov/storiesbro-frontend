import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";

const MyModal = ({ children, title, isFormOpen, setIsFormOpen, hasHandle }) => {
  return (
    <Modal
      open={isFormOpen}
      onClose={hasHandle ? () => setIsFormOpen() : () => setIsFormOpen(false)}
      sx={{
        width: "30%",
        m: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          p: "20px 40px",
          borderRadius: "20px",
          outline: "none",
        }}
      >
        <Typography
          sx={{
            mb: 3,
            mt: 2,
            textAlign: "center",
            fontWeight: 600,
            fontSize: "38px",
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default MyModal;
