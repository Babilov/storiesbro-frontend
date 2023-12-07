import { Box, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import GradientButton from "../buttons/GradientButton";
import VkEnter from "../buttons/VkEnter";
import MyInput from "../input/MyInput";
import axios from "axios";
import { setTokken } from "../../../store/userReducer";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../constants/constatns";

const LoginFormInfo = ({
  handleChangePassword,
  handleRegistrationForm,
  setIsLoginFormOpen,
  setIsConfirmPageOpen,
}) => {
  const error = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleConfirmForm = () => {
    setIsLoginFormOpen(false);
    setIsConfirmPageOpen(true);
    axios
      .post(`${API_URL}login/`, {
        email: email,
        password: password,
      })
      .then(function (responce) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + responce.data["access"];
        localStorage.setItem("token", responce.data["access"]);
        dispatch(setTokken(responce.data["access"]));
      });
  };
  return (
    <>
      <MyInput label="Введите почту" value={email} setValue={setEmail} />
      <MyInput
        label="Введите пароль"
        isPassword={true}
        value={password}
        setValue={setPassword}
      />
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
