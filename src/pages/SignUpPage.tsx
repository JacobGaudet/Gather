import React from "react";
import { Box, Typography } from "@mui/material";
import SignUpForm from "../components/SignUpForm";

const SignUpPage: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh", // Center vertically
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
      Sign Up
    </Typography>
    <SignUpForm />
  </Box>
);

export default SignUpPage;
