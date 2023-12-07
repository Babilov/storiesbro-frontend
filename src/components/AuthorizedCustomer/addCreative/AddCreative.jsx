import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCreative = () => {
  const navigate = useNavigate();

  return (
    <Box className="grid">
      <Typography className="title">Вид креатива</Typography>
      <Box className="columnCenter">
        <Typography
          className="grayBorder sm500"
          sx={{
            pt: 1,
            pb: 1,
            width: { md: "20%", xs: "100%" },
            textAlign: "center",
            mb: 2,
            cursor: " pointer",
            transition: ".3s",
            ":hover": { filter: "brightness(50%)" },
          }}
          onClick={() => navigate("/creatives/add-creative/single")}
        >
          Одиночный
        </Typography>
        <Typography
          className="grayBorder sm500"
          sx={{
            pt: 1,
            pb: 1,
            width: { md: "20%", xs: "100%" },
            textAlign: "center",
            mb: 2,
            cursor: " pointer",
            transition: ".3s",
            ":hover": { filter: "brightness(50%)" },
          }}
          onClick={() => navigate("/creatives/add-creative/double/1")}
        >
          Двойной
        </Typography>
        <Typography
          className="grayBorder sm500"
          sx={{
            pt: 1,
            pb: 1,
            width: { md: "20%", xs: "100%" },
            textAlign: "center",
            mb: 2,
            cursor: " pointer",
            transition: ".3s",
            ":hover": { filter: "brightness(50%)" },
          }}
          onClick={() => navigate("/creatives/add-creative/repost")}
        >
          Репост
        </Typography>
        <Typography
          className="grayBorder sm500"
          sx={{
            pt: 1,
            pb: 1,
            width: { md: "20%", xs: "100%" },
            textAlign: "center",
            mb: 2,
            cursor: " pointer",
            transition: ".3s",
            ":hover": { filter: "brightness(50%)" },
          }}
          onClick={() => navigate("/creatives/add-creative/sticker-link")}
        >
          Ссылка-стикер
        </Typography>
        <Typography
          className="grayBorder sm500"
          sx={{
            pt: 1,
            pb: 1,
            width: { md: "20%", xs: "100%" },
            textAlign: "center",
            mb: 2,
            cursor: " pointer",
            transition: ".3s",
            ":hover": { filter: "brightness(50%)" },
          }}
          onClick={() =>
            navigate("/creatives/add-creative/double-sticker-link")
          }
        >
          Двойная ссылка-стикер
        </Typography>
      </Box>
    </Box>
  );
};

export default AddCreative;
