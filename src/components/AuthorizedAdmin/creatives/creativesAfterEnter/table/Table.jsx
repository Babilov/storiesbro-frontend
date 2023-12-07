import React, { useEffect, useState } from "react";
import { Divider, Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import DeletePublicModal from "./modals/DeletePublicModal";
import { get_list } from "../../../../../api/publics";

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
              <Link
                to={`/publics/setting/${publicObj["id"]}`}
                sx={{
                  m: 2,
                  cursor: "pointer",
                }}
                className="linkItem"
              >
                Настройки
              </Link>
              <Typography>|</Typography>
              <Typography
                className="delete"
                sx={{
                  cursor: "pointer",

                  ":hover": { color: "#E37E31" },
                }}
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
              <Link
                to={`/publics/setting/${publicObj["id"]}`}
                sx={{
                  m: 2,
                  cursor: "pointer",
                }}
                className="menuItem"
              >
                Настройки
              </Link>
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
