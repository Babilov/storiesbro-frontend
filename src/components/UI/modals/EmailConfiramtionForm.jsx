import React, { useState } from "react";

import MyModal from "./MyModal";
import { Box, Typography } from "@mui/material";
import MyInput from "../input/MyInput";
import ErrorMessage from "../errors/ErrorMessage";
import GradientButton from "../buttons/GradientButton";

const EmailConfirmationForm = ({ isEmailConfirm, setIsEmailConfirm }) => {
  const error = true;
  const [code, setCode] = useState("");

  return (
    <MyModal
      title="Подтверждение почты"
      isFormOpen={isEmailConfirm}
      setIsFormOpen={() => setIsEmailConfirm(false)}
    >
      <Typography>
        Код для активации аккаунта отправили на почту gusgausa@gmail.com
      </Typography>
      <MyInput label="Введите код" value={code} setValue={setCode} />
      <ErrorMessage error={error} errorMessage="*Неверный код" />
      <Box onClick={() => setIsEmailConfirm(false)}>
        <GradientButton>Готово</GradientButton>
      </Box>
    </MyModal>
  );
};

export default EmailConfirmationForm;
