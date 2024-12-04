import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login attempt:", { email, password });
    // Add login API logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3, // Space between form fields
        width: "100%",
        maxWidth: "400px", // Limit form width
        mt: 3,
      }}
    >
      {/* Email Input */}
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />

      {/* Password Input */}
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
      />

      {/* Login Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
