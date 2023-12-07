import React from "react";
import { DropzoneArea } from "mui-file-dropzone";
import { Box } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import "./styles/style.css";

const MyDropZone = ({ isHidden }) => {
  return (
    <Box
      sx={{ width: { md: "20%", xs: "100%" }, height: "75%" }}
      className="uploadBLock"
    >
      <DropzoneArea
        filesLimit={1}
        dropzoneClass={`dropZoneArea ${isHidden && "hidden"}`}
        dropzoneText={"загрузите фото/видео"}
        Icon={FileDownloadOutlinedIcon}
      />
    </Box>
  );
};

export default MyDropZone;
