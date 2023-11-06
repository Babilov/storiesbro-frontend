import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProfileHeader from "../../components/Profile/profileHeader/ProfileHeader";
import ProfileLowComission from "../../components/Profile/profileLowComission/ProfileLowComission";

const LowComission = () => {
  return (
    <Box>
      <ProfileHeader />
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: 600,
            mb: 2,
            mt: 2,
          }}
        >
          Уменьшение комиссии
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontSize: "24px", fontWeight: 400 }}
        >
          Вы можете снизить комиссию на вывод - просто добавив наш сервис в
          ссылки Ваших сообществ{")"}
        </Typography>
        <ProfileLowComission />
      </Container>
    </Box>
  );
};

export default LowComission;
