import React, { useState } from "react";
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
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <MyModal
      title="Смена пароля"
      isFormOpen={isChangePasswordOpen}
      setIsFormOpen={() => setIsChangePasswordOpen(false)}
    >
      <Box>
        <MyInput
          label="Введите новый пароль"
          isPassword={true}
          value={password}
          setValue={setPassword}
        />
        <MyInput
          label="Повторите пароль"
          isPassword={true}
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
        <ErrorMessage error={error} errorMessage="*Пароли не совпадают" />
        <GradientButton handleClick={handleClick}>Сохранить</GradientButton>
      </Box>
    </MyModal>
  );
};

export default ChangePassword;
