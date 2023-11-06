import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import comissionLogo from "./images/comissionLogo.svg";
import comissionNoAvatar from "./images/comissionNoAvatar.svg";
import comissionCheck from "./images/comissionCheck.svg";
import comissionCross from "./images/comissionCross.svg";

const ProfileLowComission = () => {
  return (
    <Grid container columnSpacing={15}>
      <Grid item xs={6}>
        <Box sx={{ border: "1px solid #CBCBCB", borderRadius: "10px", p: 2 }}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: 2 }}>
            Ссылки{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 600, fontSize: "18px", color: "#878787" }}
            >
              1
            </Typography>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" alt="logo" src={comissionLogo} />
            <Box>
              <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                Storisbro - реклама в историях
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 500, color: "#878787" }}
              >
                adspoiler.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box component="img" alt="check" src={comissionCheck} />
          <Typography
            sx={{ fontSize: "24px", fontWeight: 600, width: "60%", ml: 1 }}
          >
            Комиссия 5% + доход с рефералки
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ border: "1px solid #CBCBCB", borderRadius: "10px", p: 2 }}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: 2 }}>
            Ссылки
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" alt="noavatar" src={comissionNoAvatar} />
            <Typography sx={{ fontSize: "18px", fontWeight: 500, ml: 1 }}>
              Здесь могла быть ссылка{"("}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box component="img" alt="cross" src={comissionCross} />
          <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
            Комиссия 20%
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileLowComission;
