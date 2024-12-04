import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

const quotes = [
  "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near. – Hebrews 10:24-25 (ESV)",
  "For where two or three are gathered in my name, there am I among them. – Matthew 18:20 (ESV)",
  "So then you are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God. – Ephesians 2:19 (ESV)",
  "And they devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers. – Acts 2:42 (ESV)",
  "For just as the body is one and has many members, and all the members of the body, though many, are one body, so it is with Christ. – 1 Corinthians 12:12 (ESV)",
  "Now you are the body of Christ and individually members of it. – 1 Corinthians 12:27 (ESV)",
  "And he put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all. – Ephesians 1:22-23 (ESV)",
  "For God is not a God of confusion but of peace. As in all the churches of the saints. – 1 Corinthians 14:33 (ESV)",
  "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light. – 1 Peter 2:9 (ESV)",
  "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God. – Colossians 3:16 (ESV)",
];

const HomePage: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleQuoteClick = () => {
    setCurrentQuoteIndex(
      currentQuoteIndex === quotes.length - 1 ? 0 : currentQuoteIndex + 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
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
        }}
      >
        Welcome to Gather
      </Typography>

      <Typography
        variant="h5"
        onClick={handleQuoteClick}
        sx={{
          fontStyle: "italic",
          color: "#90caf9",
          mb: 4,
          cursor: "pointer",
          textAlign: "center",
          px: 2,
          fontSize: { xs: "1rem", sm: "1.5rem" },
          transition: "opacity 1s ease-in-out",
          "&:hover": {
            color: "#64b5f6",
          },
        }}
        key={currentQuoteIndex}
      >
        {quotes[currentQuoteIndex]}
      </Typography>

      <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, mt: { xs: 2, sm: 4 } }}>
        <Button
          variant="contained"
          color="primary"
          href="/preferences"
          sx={{
            width: { xs: "100px", sm: "150px" },
            fontSize: { xs: "12px", sm: "16px" },
            fontWeight: "bold",
          }}
        >
          Set Preferences
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="/churches"
          sx={{
            width: { xs: "100px", sm: "150px" },
            fontSize: { xs: "12px", sm: "16px" },
            fontWeight: "bold",
          }}
        >
          Find Churches
        </Button>
        <Button
          variant="contained"
          color="success"
          href="/login"
          sx={{
            width: { xs: "100px", sm: "150px" },
            fontSize: { xs: "12px", sm: "16px" },
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="success"
          href="/signup"
          sx={{
            width: { xs: "100px", sm: "150px" },
            fontSize: { xs: "12px", sm: "16px" },
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
