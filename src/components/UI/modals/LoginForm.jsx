import React, { useState } from "react";

import MyModal from "./MyModal";
import ConfirmationForm from "./ConfirmationForm";
import ChangePassword from "./ChangePassword";
import LoginFormInfo from "./LoginFormInfo";
import RegistrationForm from "./RegistrationForm";

const LoginForm = ({ isLoginFormOpen, setIsLoginFormOpen }) => {
  const handleConfirmForm = () => {
    setIsLoginFormOpen(false);
    setIsConfirmPageOpen(true);
  };

  const handleChangePassword = () => {
    setIsLoginFormOpen(false);
    setIsChangePasswordOpen(true);
  };

  const handleRegistrationForm = () => {
    setIsLoginFormOpen(false);
    setIsRegistrationForm(true);
  };

  const handleLoginForm = () => {
    setIsRegistrationForm(false);
    setIsLoginFormOpen(true);
  };

  const [isConfirmFormOpen, setIsConfirmPageOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isRegistrationForm, setIsRegistrationForm] = useState(false);

  return (
    <>
      <ConfirmationForm
        isConfirmFormOpen={isConfirmFormOpen}
        setIsConfirmPageOpen={setIsConfirmPageOpen}
      />
      <ChangePassword
        isChangePasswordOpen={isChangePasswordOpen}
        setIsChangePasswordOpen={setIsChangePasswordOpen}
      />

      <RegistrationForm
        isRegistrationForm={isRegistrationForm}
        setIsRegistrationForm={setIsRegistrationForm}
        handleLoginForm={handleLoginForm}
      />

      <MyModal
        title="Вход"
        isFormOpen={isLoginFormOpen}
        setIsFormOpen={() => setIsLoginFormOpen(false)}
      >
        <LoginFormInfo
          handleConfirmForm={handleConfirmForm}
          handleChangePassword={handleChangePassword}
          handleRegistrationForm={handleRegistrationForm}
        />
      </MyModal>
    </>
  );
};

export default LoginForm;
