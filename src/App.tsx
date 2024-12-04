import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PreferencesPage from "./pages/PreferencesPage";
import ChurchesPage from "./pages/ChurchesPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AuthContextProvider from "./context/AuthContext";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

// Create a dark mode theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue for primary
    },
    secondary: {
      main: "#f48fb1", // Pink for secondary
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Slightly lighter for paper
    },
    text: {
      primary: "#ffffff", // White text for contrast
      secondary: "#b0bec5", // Muted secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Consistent font
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline /> {/* Reset baseline styles */}
    <Box
      sx={{
        minHeight: "100vh", // Full-page height
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default", // Background from theme
        color: "text.primary", // Text color from theme
      }}
    >
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/churches" element={<ChurchesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </Box>
  </ThemeProvider>
);

export default App;
