import React, { useState } from "react";
import MyModal from "./MyModal";

import MyInput from "../input/MyInput";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import GradientButton from "../buttons/GradientButton";
import EmailConfirmationForm from "./EmailConfiramtionForm";

const RegistrationForm = ({
  isRegistrationForm,
  setIsRegistrationForm,
  handleLoginForm,
}) => {
  const handleConfirmEmail = () => {
    setIsRegistrationForm(false);
    setIsEmailConfirm(true);
    setIsChecked(false);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationForm(false);
    setIsChecked(false);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);
  return (
    <>
      <EmailConfirmationForm
        isEmailConfirm={isEmailConfirm}
        setIsEmailConfirm={setIsEmailConfirm}
      />
      <MyModal
        title="Регистрация"
        isFormOpen={isRegistrationForm}
        setIsFormOpen={handleCloseRegistration}
        hasHandle={true}
      >
        <MyInput label="Введите почту" />
        <MyInput label="Прилдумайте пароль" isPassword={true} />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography>
              Согласны с <Link>правилами пользования</Link> и{" "}
              <Link>политикой конфиденциальности</Link>
            </Typography>
          }
          onChange={() => setIsChecked(!isChecked)}
        />
        <Box
          onClick={() => handleConfirmEmail()}
          sx={{ width: "300px", m: "20px auto" }}
        >
          <GradientButton height="52px" disabled={!isChecked}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Зарегистрироваться
            </Typography>
          </GradientButton>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          Есть аккаунт?
          <Link onClick={() => handleLoginForm()} sx={{ cursor: "pointer" }}>
            Войти
          </Link>
        </Typography>
      </MyModal>
    </>
  );
};

export default RegistrationForm;
