import { Box, Typography } from "@mui/material";
import React from "react";

const Advices = () => {
  const FONT_SIZE_XL = "38px";
  const FONT_SIZE_M = "18px";
  const FONT_WEIGHT_XL = "600";
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h3"
        sx={{ fontSize: FONT_SIZE_XL, fontWeight: FONT_WEIGHT_XL, mb: 5 }}
      >
        Как{" "}
        <Typography
          component="span"
          className="orange"
          sx={{ fontSize: FONT_SIZE_XL, fontWeight: FONT_WEIGHT_XL }}
        >
          повысить
        </Typography>{" "}
        конверсию рекламного креатива
      </Typography>

      <Box>
        <Typography sx={{ fontSize: FONT_SIZE_M, mb: 2 }}>
          1.{" "}
          <Typography
            component="span"
            sx={{ fontWeight: FONT_WEIGHT_XL, fontSize: FONT_SIZE_M }}
          >
            Добавляйте “популярную” музыку.{" "}
          </Typography>
          Проверено, что конверсия креативов с “популярными” песнями в разы
          выше, чем с просто мелодиями/без песен.
        </Typography>

        <Typography sx={{ fontSize: FONT_SIZE_M, mb: 2 }}>
          2.{" "}
          <Typography
            component="span"
            sx={{ fontWeight: FONT_WEIGHT_XL, fontSize: FONT_SIZE_M }}
          >
            Соблюдайте пропорции.
          </Typography>{" "}
          Большинство пользователей просматривают истории с мобильных устройств,
          поэтому 9:16 - наиболее подходящее соотношение сторон.
        </Typography>

        <Typography sx={{ fontSize: FONT_SIZE_M, mb: 2 }}>
          3.{" "}
          <Typography
            component="span"
            sx={{ fontWeight: FONT_WEIGHT_XL, fontSize: FONT_SIZE_M }}
          >
            Ориентируйтесь на качественный монтаж и исходники.
          </Typography>{" "}
          При одинаковом содержании, у плавных и внешне привлекательных
          креативов выше конверсия, чем у сделанных “на коленке”.
        </Typography>

        <Typography sx={{ fontSize: FONT_SIZE_M, mb: 2 }}>
          4.{" "}
          <Typography
            component="span"
            sx={{ fontWeight: FONT_WEIGHT_XL, fontSize: FONT_SIZE_M }}
          >
            Не забывайте про рекламные основы.
          </Typography>{" "}
          AIDA, ODC, PPPP и остальные формулы - “друзья” высокой конверсии.
        </Typography>

        <Typography sx={{ fontSize: FONT_SIZE_M, mb: 2 }}>
          5.{" "}
          <Typography
            component="span"
            sx={{ fontWeight: FONT_WEIGHT_XL, fontSize: FONT_SIZE_M }}
          >
            Захватывайте внимание в первые секунды.
          </Typography>{" "}
          Если не зацепить внимание пользователя, то он просто “пропустит”
          историю и конверсия упадёт.
        </Typography>

        <Typography sx={{ fontSize: FONT_SIZE_M, mb: 2 }}>
          6.{" "}
          <Typography
            component="span"
            sx={{ fontWeight: FONT_WEIGHT_XL, fontSize: FONT_SIZE_M }}
          >
            Призывайте к действию.
          </Typography>{" "}
          Добавление “стрелок”, указателей и призывов к переходу по кнопке -
          повышает конверсию.
        </Typography>
      </Box>
    </Box>
  );
};

export default Advices;
