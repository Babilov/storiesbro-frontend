import { Divider, Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";

import DeletePublicModal from "./modals/DeletePublicModal";

const Table = ({ publics, setPublics }) => {
  const handleDelete = (id) => {
    setPublicObj(publics.filter((item) => item["id"] === id)[0]);
    setDeletPublic(true);
  };

  const [deletePublic, setDeletPublic] = useState(false);
  const [publicObj, setPublicObj] = useState(null);

  return (
    <>
      <DeletePublicModal
        open={deletePublic}
        setOpen={setDeletPublic}
        setPublics={setPublics}
        publics={publics}
        publicObj={publicObj}
      />
      <Box
        sx={{
          border: "1px solid #CDCDCD",
          borderRadius: "10px",
          p: "0 25px",
          display: { xs: "none", md: "block" },
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            p: 2,
          }}
          className="adminTitles"
        >
          <Grid item xs={3}>
            <Typography variant="h4">Сообщество</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4">Название</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h4">Статус</Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Divider />
        {publics.map((publicObj) => (
          <Grid
            container
            key={[publicObj["id"]]}
            className="adminPublics"
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #CDCDCD",
              pt: 1,
              pb: 1,
            }}
          >
            <Grid
              item
              xs={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box component="img" alt="img" src={publicObj["image"]} />
            </Grid>

            <Grid item xs={3}>
              <Typography>{publicObj["title"]}</Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
                sx={{
                  color:
                    publicObj["status"] === "Активен"
                      ? "green"
                      : publicObj["status"] === "Отклонён"
                      ? "red"
                      : "black",
                }}
              >
                {publicObj["status"]}
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ cursor: "pointer" }}>Настройки</Typography>
              <Typography>|</Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => handleDelete(publicObj["id"])}
              >
                Удалить
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {publics.map((publicObj) => (
          <Box className="grayBorder" sx={{ mb: 2 }} key={publicObj["id"]}>
            <Box
              sx={{
                display: "flex",
                borderBottom: "1px solid #CBCBCB",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  alt="avatar"
                  src={publicObj["image"]}
                  sx={{ m: 2 }}
                />
                <Typography sx={{ fontSize: "12px", fontWeight: 600, mt: 2 }}>
                  {publicObj["title"]}
                </Typography>
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  right: 10,
                  bottom: 2,
                  fontSize: "12px",
                  color:
                    publicObj["status"] === "Активен"
                      ? "green"
                      : publicObj["status"] === "Отклонён"
                      ? "red"
                      : "black",
                }}
              >
                {publicObj["status"]}
              </Typography>
            </Box>
            <Box className="spaceAround" sx={{}}>
              <Typography sx={{ fontSize: "12px", m: 2, cursor: "pointer" }}>
                Настройки
              </Typography>
              <Typography sx={{ color: "#CBCBCB", m: 2 }}>|</Typography>
              <Typography
                sx={{ fontSize: "12px", m: 2, cursor: "pointer" }}
                onClick={() => handleDelete(publicObj["id"])}
              >
                Удалить
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Table;
