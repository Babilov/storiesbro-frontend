import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const FAQ = ({ questions }) => {
  return (
    <Box>
      <Typography
        sx={{ fontWeight: 600, fontSize: "32px", textAlign: "center" }}
      >
        Часто задаваемые вопросы
      </Typography>

      {Object.keys(questions).map((question, index) => (
        <Accordion
          key={index}
          sx={{
            borderBottom: "1px solid #E37E31",
            borderTop: 0,
            boxShadow: "none",
            position: "static",
            mb: 1,
          }}
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#E37E31", fontSize: "35px" }} />
            }
          >
            <Typography sx={{ fontWeight: 400, fontSize: "24px" }}>
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
              {questions[question]}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
