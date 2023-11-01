import React from "react";
import MyModal from "./MyModal";
import { Box } from "@mui/material";
import GradientButton from "../buttons/GradientButton";
import MyInput from "../input/MyInput";
import ErrorMessage from "../errors/ErrorMessage";

const ChangePassword = ({ isChangePasswordOpen, setIsChangePasswordOpen }) => {
  const handleClick = () => {
    setIsChangePasswordOpen(false);
  };
  const error = true;
  return (
    <MyModal
      title="Смена пароля"
      isFormOpen={isChangePasswordOpen}
      setIsFormOpen={setIsChangePasswordOpen}
    >
      <Box>
        <MyInput label="Введите новый пароль" isPassword={true} />
        <MyInput label="Повторите пароль" isPassword={true} />
        <ErrorMessage error={error} errorMessage="*Пароли не совпадают" />
        <GradientButton handleClick={handleClick}>Сохранить</GradientButton>
      </Box>
    </MyModal>
  );
};

export default ChangePassword;
