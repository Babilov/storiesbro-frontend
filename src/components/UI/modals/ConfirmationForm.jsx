import React from "react";
import { Box, Typography } from "@mui/material";

import MyModal from "./MyModal";
import GradientButton from "../buttons/GradientButton";
import MyInput from "../input/MyInput";
import ErrorMessage from "../errors/ErrorMessage";

const ConfirmationForm = ({ isConfirmFormOpen, setIsConfirmPageOpen }) => {
  const handleClick = () => {
    setIsConfirmPageOpen(false);
  };

  const error = true;

  return (
    <MyModal
      title="Подтверждение входа"
      isFormOpen={isConfirmFormOpen}
      setIsFormOpen={setIsConfirmPageOpen}
    >
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", fontWeight: 400, mb: 1 }}
      >
        Видим, что входите с нового устройства, отправили код на Вашу почту
      </Typography>
      <MyInput label="Введите код" />
      <ErrorMessage error={error} errorMessage={"*неверный код"} />

      <Box sx={{ width: "287px", m: "0 auto" }}>
        <GradientButton handleClick={handleClick}>Готово</GradientButton>
      </Box>
    </MyModal>
  );
};

export default ConfirmationForm;
