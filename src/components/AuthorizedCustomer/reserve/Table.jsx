import React, { useState } from "react";
import { getDates } from "./utils/getDates";

import MyButton from "../../UI/buttons/MyButton";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDatesAction } from "../../../store/creativeReducer";

const Table = () => {
  const handleClick = (index) => {
    const temp = [...buttonClicked];
    temp[index] = !buttonClicked[index];
    setButtonClicked(temp);
  };

  const handleNextPage = () => {
    const temp = [];
    buttonClicked.forEach((item, i) => {
      if (item === true) {
        temp.push(days[i]);
      }
    });
    dispatch(setDatesAction(temp));
    navigate("/reservation/choose-creative");
  };

  const [buttonClicked, setButtonClicked] = useState(Array(14).fill(false));

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const days = getDates();
  return (
    <Box className="grid" sx={{ mb: 8 }}>
      <Typography className="lSizeText" sx={{ mt: 3 }}>
        Выберите место
      </Typography>
      <Grid container sx={{ m: "0 auto" }} columnSpacing={1} rowSpacing={3}>
        {days.map((item, i) => (
          <Grid item md={11.9 / 7} xs={6} key={item["day"]} sx={{ mb: 2 }}>
            <Box
              className="grayBorder"
              sx={{
                background: item["places"] === 0 && "#CBCBCB",
                mb: 1,
              }}
            >
              <Typography className="centerText description">
                {item["day"]}
              </Typography>
              <Typography className="centerText">
                {item["places"]}{" "}
                {" " +
                  (item["places"] === 0
                    ? "мест"
                    : item["places"] === 1
                    ? "место"
                    : "места")}
              </Typography>
            </Box>
            {item["places"] !== 0 && (
              <>
                <MyButton
                  options={{
                    background: "#E37E31",
                    display: buttonClicked[i] && "none",
                  }}
                  disabled={buttonClicked[i]}
                  onClick={() => handleClick(i)}
                >
                  Выбрать
                </MyButton>
                <MyButton
                  onClick={() => handleClick(i)}
                  options={{
                    background: "#4CD640",
                    display: !buttonClicked[i] && "none",
                  }}
                  disabled={!buttonClicked[i]}
                >
                  Выбрано
                </MyButton>
              </>
            )}
          </Grid>
        ))}
      </Grid>
      {buttonClicked.some((el) => el) && (
        <Box sx={{ m: "0 auto", width: { md: "18%", xs: "50%" } }}>
          <MyButton
            onClick={handleNextPage}
            options={{ background: "#4CD640" }}
          >
            Далее
          </MyButton>
        </Box>
      )}
    </Box>
  );
};

export default Table;
