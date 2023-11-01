import { Box } from "@mui/material";
import React from "react";
import storisImage from "../../../images/storis.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "./style.css";
import "swiper/css/navigation";

const MyCarousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      <SwiperSlide>
        <Box component="img" src={storisImage} />
      </SwiperSlide>
      <SwiperSlide>
        <Box component="img" src={storisImage} />
      </SwiperSlide>
      <SwiperSlide>
        <Box component="img" src={storisImage} />
      </SwiperSlide>
      <SwiperSlide>
        <Box component="img" src={storisImage} />
      </SwiperSlide>
      <SwiperSlide>
        <Box component="img" src={storisImage} />
      </SwiperSlide>
      <SwiperSlide>
        <Box component="img" src={storisImage} />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
