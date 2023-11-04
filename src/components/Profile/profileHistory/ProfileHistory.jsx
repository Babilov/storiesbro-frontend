import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import check from "../../../images/profileImages/alertsHistoryIcons/check.svg";
import cross from "../../../images/profileImages/alertsHistoryIcons/cross.svg";
import MyButton from "../../UI/buttons/MyButton";
import Comment from "./Comment";

const ProfileHistory = () => {
  const alerts = [
    {
      id: 1,
      isConfirmed: true,
      type: "Модерация креатива",
      date: "18:14",
      content: "Ваш креатив “Пранк-бот” одобрен. Желаем хороших закупов;)",
    },
    {
      id: 2,
      isConfirmed: false,
      type: "Модерация креатива",
      date: "02.08.2023",
      content:
        "Ваш креатив “Пранк-бот” не прошёл проверку. Ознакомьтесь с комментарием и ждём его на проверке снова;)",
      comment: "Исправьте эротический контекст и загрузите креатив снова.",
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [buttonId, setButton] = useState(-1);

  const handleClick = (id) => {
    setIsFormOpen(true);
    setButton(id);
  };

  return (
    <Box sx={{ width: "80%" }}>
      {alerts.map((alert) => (
        <Box
          key={alert["id"]}
          sx={{
            border: "1px solid #CBCBCB",
            borderRadius: "10px",
            mb: 2,
            p: "10px 30px 10px 10px",
          }}
        >
          <Comment
            id={alert["id"]}
            buttonId={buttonId}
            comment={alert["comment"]}
            isFormOpen={isFormOpen}
            setIsFormOpen={setIsFormOpen}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                component="img"
                alt="confirm"
                src={alert["isConfirmed"] ? check : cross}
                sx={{ mt: 0.5, mr: 1 }}
              />

              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  {alert["type"]}
                </Typography>

                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                  {alert["content"]}
                </Typography>

                {alert["comment"] && (
                  <Box sx={{ mt: 2, width: "25%" }}>
                    <MyButton
                      onClick={() => handleClick(alert["id"])}
                      options={{ background: "#E37E31", color: "white" }}
                    >
                      Комментарий
                    </MyButton>
                  </Box>
                )}
              </Box>
            </Box>

            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              {alert["date"]}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileHistory;
