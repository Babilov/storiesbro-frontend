import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import bot from "../../../images/adminAdvantages/bot.svg";
import cashBag from "../../../images/adminAdvantages/cashBag.svg";
import helpDesk from "../../../images/adminAdvantages/helpDesk.svg";
import hours from "../../../images/adminAdvantages/hours.svg";
import smartphone from "../../../images/adminAdvantages/smartphone.svg";
import speeding from "../../../images/adminAdvantages/speeding.svg";
import stats from "../../../images/adminAdvantages/stats.svg";
import steeringWheel from "../../../images/adminAdvantages/steeringWheel.svg";
import GradientButton from "../buttons/GradientButton";

const Advantages = () => {
  const images = {};
  images[smartphone] =
    "Все креативы проверяются вручную на соответствие правилам Вконтакте";
  images[stats] = "Прозрачная статистика и доходы";
  images[steeringWheel] = "Простое управление";
  images[speeding] = "Гибкая и оперативная система выплат";
  images[cashBag] = "Хорошие условия по реферальной программе";
  images[helpDesk] = "Отзывчивая тех. поддержка 24/7";
  images[bot] = "Автоматическая публикация историй";
  images[hours] = "Постоянная монетизация сообществ";

  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, fontSize: "32px", textAlign: "center" }}
      >
        Преимущества Storisbro
      </Typography>
      <Grid container columnSpacing={3} sx={{ mb: 5 }}>
        {Object.keys(images).map((image, index) => (
          <Grid
            item
            xs={6}
            key={index}
            sx={{ display: "flex", alignItems: "center", mt: 5 }}
          >
            <Box component="img" src={image} />
            <Typography sx={{ fontSize: "24px", fontWeight: 400, ml: 2 }}>
              {images[image]}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <GradientButton width="390px" height="72px">
        Подключиться сейчас
      </GradientButton>
    </Box>
  );
};

export default Advantages;
