import { Box, Link, Typography } from "@mui/material";
import React from "react";
import ErrorMessage from "../errors/ErrorMessage";
import GradientButton from "../buttons/GradientButton";
import VkEnter from "../buttons/VkEnter";
import MyInput from "../input/MyInput";

const LoginFormInfo = ({
  handleConfirmForm,
  handleChangePassword,
  handleRegistrationForm,
}) => {
  const error = true;

  return (
    <>
      <MyInput label="Введите почту" />
      <MyInput label="Введите пароль" isPassword={true} />
      <ErrorMessage
        error={error}
        errorMessage="*опа, ошибка в логине, либо в пароле"
      />
      <Link
        sx={{
          textAlign: "right",
          color: "#E37E31",
          textDecoration: "underline #E37E31",
          mb: 3,
          fontSize: "16px",
          fontWeight: 400,
          cursor: "pointer",
        }}
        onClick={() => handleChangePassword()}
      >
        Восстановить пароль
      </Link>
      <GradientButton handleClick={handleConfirmForm}>Войти</GradientButton>
      <Box sx={{ mt: 1, mb: 1 }}></Box>
      <VkEnter>Войти через</VkEnter>
      <Typography
        sx={{
          mt: 2,
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
        Нет аккаунта?
        <Link
          onClick={() => handleRegistrationForm()}
          sx={{
            color: "#E37E31",
            textDecoration: "underline #E37E31",
            cursor: "pointer",
          }}
        >
          Зарегистрироваться
        </Link>
      </Typography>
    </>
  );
};

export default LoginFormInfo;
