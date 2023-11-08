<Box
  sx={{
    display: "flex",
    border: "2px solid black",
    width: "100%",
    height: "75vh",
    position: "relative",
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontSize: FONT_SIZE_XL,
      fontWeight: FONT_WEIGHT_XL,
      width: "50%",
    }}
  >
    Как{" "}
    <Typography
      component="span"
      className="orange"
      sx={{ fontSize: FONT_SIZE_XL, fontWeight: FONT_WEIGHT_XL }}
    >
      заказать
    </Typography>{" "}
    рекламу на платформе
  </Typography>
  <Box
    className="number"
    sx={{ position: "absolute", left: "0%", bottom: "5%" }}
  >
    <Typography className="digit">1</Typography>
    <Typography className="steps__text">Пополяем баланс</Typography>
  </Box>

  <Box
    className="number"
    sx={{ position: "absolute", left: "25%", bottom: "13%" }}
  >
    <Typography className="digit">2</Typography>
    <Typography className="steps__text">Загружаем креатив</Typography>
    <Box
      sx={{
        background: "black",
        position: "absolute",
        width: "100%",
        height: "50px",
      }}
    />
  </Box>

  <Box
    className="number"
    sx={{ position: "absolute", left: "50%", bottom: "21%" }}
  >
    <Typography className="digit">3</Typography>
    <Typography className="steps__text">Бронируем места </Typography>
  </Box>

  <Box
    className="number"
    sx={{ position: "absolute", left: "75%", bottom: "29%" }}
  >
    <Typography className="digit">4</Typography>
    <Typography className="steps__text">Получаем статистику</Typography>
  </Box>
</Box>;
