import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileHeader from "../../components/Profile/profileHeader/ProfileHeader";
import DepositMenu from "../../components/Profile/profileCash/CashMenu/DepositMenu";
import { CashContext } from "../../components/Profile/profileCash/CashContext";

const CashPattern = ({ children, isDeposit, title }) => {
  const [comissionModalOpen, setComissionModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [codeModal, setCodeModal] = useState(false);

  return (
    <CashContext.Provider
      value={[
        comissionModalOpen,
        setComissionModalOpen,
        errorModalOpen,
        setErrorModalOpen,
        codeModal,
        setCodeModal,
      ]}
    >
      <ProfileHeader />
      <Container>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
          {title}
        </Typography>
        <DepositMenu isDeposit={isDeposit} />
        <Box>{children}</Box>
      </Container>
    </CashContext.Provider>
  );
};

export default CashPattern;
