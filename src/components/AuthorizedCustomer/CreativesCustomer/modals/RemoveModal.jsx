import React from "react";
import MyModal from "../../../UI/modals/MyModal";
import { Box, Typography } from "@mui/material";
import MyButton from "../../../UI/buttons/MyButton";

const RemoveModal = ({
  open,
  setOpen,
  deleteCreative,
  creatives,
  setCreatives,
  arhive,
  setArhive,
}) => {
  const handleDelete = () => {
    setCreatives(creatives.filter((item) => item !== deleteCreative));
    setOpen(false);
  };

  const handleMoveToArhive = () => {
    setCreatives(creatives.filter((item) => item !== deleteCreative));
    setArhive([...arhive, deleteCreative]);
    setOpen(false);
  };

  return (
    <MyModal
      width="100%"
      isFormOpen={open}
      setIsFormOpen={() => setOpen(false)}
    >
      <Typography>Куда убрать креатив {deleteCreative["title"]}?</Typography>
      <Box className="spaceBetween">
        <MyButton onClick={handleDelete} options={{ background: "#D25D48" }}>
          Удалить
        </MyButton>
        <MyButton
          onClick={handleMoveToArhive}
          options={{ background: "#4CD640" }}
        >
          В архив
        </MyButton>
      </Box>
    </MyModal>
  );
};

export default RemoveModal;
