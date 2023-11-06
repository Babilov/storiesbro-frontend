import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";

import DepositSelect from "./DepositSelect";
import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/buttons/MyButton";
import { CashContext } from "../CashContext";
import Comission from "./Comisson";
import { Link } from "react-router-dom";

const DepositMenu = ({ isDeposit }) => {
  const handleClick = () => {
    if (error) {
      setErrorModalOpen(true);
    } else {
      if (newRequisites) {
        setCodeModal(true);
      }
    }
  };

  const [cash, setCash] = useState(0);
  const [requisites, setRequisites] = useState("");
  const [, setComissionModalOpen, , setErrorModalOpen, , setCodeModal] =
    useContext(CashContext);
  const error = false;
  const newRequisites = true;

  return (
    <Box>
      <Box
        sx={{
          width: "75%",
          m: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
          <MyInput
            label="Введите сумму"
            value={cash}
            setValue={setCash}
            onClick={() => cash === 0 && setCash("")}
          />
          <Typography>₽</Typography>
        </Box>
        {isDeposit ? (
          <DepositSelect />
        ) : (
          <Box sx={{ width: "25%" }}>
            <MyInput
              label="Введите реквизиты"
              value={requisites}
              setValue={setRequisites}
            />
          </Box>
        )}
        <Comission
          setComissionOpen={setComissionModalOpen}
          isDeposit={isDeposit}
        />
        {!isDeposit && (
          <Box sx={{ width: "25%" }}>
            <Link to="/cash/low-comission">
              <MyButton options={{ background: "#4CD640", color: "white" }}>
                Хочу уменьшить
              </MyButton>
            </Link>
          </Box>
        )}
      </Box>
      <Box sx={{ width: "18%", m: "30px auto" }}>
        <MyButton
          onClick={handleClick}
          options={{ background: "#E37E31", color: "white" }}
        >
          {isDeposit ? "Пополнить" : "Вывести"}
        </MyButton>
      </Box>
    </Box>
  );
};

export default DepositMenu;
