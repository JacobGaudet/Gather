import React from "react";
import { Box, Typography } from "@mui/material";
import PreferencesForm from "../components/PreferencesForm";

const PreferencesPage: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh", // Full page height
      p: { xs: 2, sm: 4 },
      bgcolor: "background.default",
      color: "text.primary",
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontWeight: "bold",
        mb: { xs: 2, sm: 4 },
        fontSize: { xs: "1.5rem", sm: "2.5rem" },
        textAlign: "center",
      }}
    >
      What Are You Looking For?
    </Typography>
    <PreferencesForm />
  </Box>
);

export default PreferencesPage;
