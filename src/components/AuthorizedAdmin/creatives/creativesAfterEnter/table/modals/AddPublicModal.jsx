import React, { useState } from "react";
import MyModal from "../../../../../UI/modals/MyModal";
import MyInput from "../../../../../UI/input/MyInput";
import { Box, Link } from "@mui/material";
import MyButton from "../../../../../UI/buttons/MyButton";
import SuccessModal from "./SuccessModal";
import NoPermissionModal from "./NoPermissionModal";

const AddPublicModal = ({ open, setOpen }) => {
  const [error, setError] = useState(true);
  const [successOpen, setSuccessOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (error) {
      setInputValue("*Походу ошибка в ссылке - такого сообщества нет");
    } else {
      if (!permission) {
        setOpen(false);
        setNoPermissionOpen(true);
      } else {
        setSuccessOpen(true);
        setOpen(false);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
    setInputValue("");
  };

  const [permission, setPermission] = useState(false);
  const [noPermissionOpen, setNoPermissionOpen] = useState(false);

  return (
    <>
      <SuccessModal open={successOpen} setOpen={setSuccessOpen} />
      <NoPermissionModal
        open={noPermissionOpen}
        setOpen={setNoPermissionOpen}
      />
      <MyModal
        width="90%"
        title="Добавление сообщества"
        isFormOpen={open}
        setIsFormOpen={handleClose}
      >
        <MyInput
          error={error}
          value={inputValue}
          setValue={setInputValue}
          label="Введите ссылку на сообщество"
        />
        <Link sx={{ textAlign: "right", mb: 2 }}>требования к сообществам</Link>
        <Box sx={{ width: "50%", m: "0 auto" }}>
          <MyButton onClick={handleClick} options={{ background: "#4CD640" }}>
            Добавить
          </MyButton>
        </Box>
      </MyModal>
    </>
  );
};

export default AddPublicModal;
