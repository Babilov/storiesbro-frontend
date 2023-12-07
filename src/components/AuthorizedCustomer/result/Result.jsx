import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MyButton from "../../UI/buttons/MyButton";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const data = useSelector((store) => store.creative);

  const navigate = useNavigate();

  const dates = data["dates"];
  const creative = data["creative"];
  const noMoney = true;

  return (
    <Box className="grid">
      <Typography className="title">Выбранные места</Typography>
      <Grid container sx={{ justifyContent: "center" }} columnSpacing={3}>
        {dates.map((date) => (
          <Grid item md={2} xs={6}>
            <Box className="grayBorder">
              <Typography className="description centerText">
                {date["day"]}
              </Typography>
              <Typography
                className="mdSizeText centerText"
                sx={{ color: "#878787" }}
              >
                {date["places"]} места
              </Typography>
            </Box>
            <Box
              sx={{
                background: "#4CD640",
                borderRadius: "10px",
                color: "white",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 1.5,
              }}
            >
              Выбрано
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography sx={{ mt: 5 }} className="title">
        Выбранный креатив
      </Typography>
      <Box
        className="grayBorder alignCenter"
        sx={{ width: { md: "30%", xs: "100%" }, m: "0 auto" }}
      >
        <Box component="img" alt="img" src={creative["image"]} sx={{ mr: 2 }} />
        <Typography>
          {creative["title"]} ({creative["date"]})
        </Typography>
      </Box>
      <Box sx={{ width: { md: "20%", xs: "40%" }, m: "0 auto", mt: 2 }}>
        <MyButton
          onClick={() =>
            !noMoney
              ? navigate("/reservation/success")
              : navigate("/reservation/last-step")
          }
          options={{ background: "#4CD640" }}
        >
          Далее
        </MyButton>
        <Typography className="orange" sx={{ textAlign: "center", mt: 1 }}>
          Отмена
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
