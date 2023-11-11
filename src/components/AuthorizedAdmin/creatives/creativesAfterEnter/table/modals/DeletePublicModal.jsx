import { Box, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import MyModal from "../../../../../UI/modals/MyModal";
import MyButton from "../../../../../UI/buttons/MyButton";
import DeleteSuccesModal from "./DeleteSuccess";

const DeletePublicModal = ({
  open,
  setOpen,
  publicObj,
  publics,
  setPublics,
}) => {
  const handleDelete = () => {
    setPublics(publics.filter((item) => item !== publicObj));
    setOpen(false);
    setDeleteSuccess(true);
  };

  const [deleteSuccess, setDeleteSuccess] = useState(false);

  return (
    <>
      <DeleteSuccesModal
        open={deleteSuccess}
        setOpen={setDeleteSuccess}
        publicTitle={publicObj ? publicObj["title"] : ""}
      />
      <MyModal
        width="90%"
        isFormOpen={open}
        setIsFormOpen={() => setOpen(false)}
      >
        <Typography className="mdSizeText" sx={{ mb: 2 }}>
          Вы точно хотите удалить сообщество{" "}
          <Link>{publicObj ? publicObj["title"] : ""}</Link>?
        </Typography>
        <Box className="alignCenter">
          <Box sx={{ mr: "5px", width: "50%" }}>
            <MyButton
              onClick={handleDelete}
              options={{ background: "#D25D48" }}
            >
              Да
            </MyButton>
          </Box>
          <Box sx={{ ml: "5px", width: "50%" }}>
            <MyButton
              onClick={() => setOpen(false)}
              options={{ background: "#4CD640" }}
            >
              Нет
            </MyButton>
          </Box>
        </Box>
      </MyModal>
    </>
  );
};

export default DeletePublicModal;
