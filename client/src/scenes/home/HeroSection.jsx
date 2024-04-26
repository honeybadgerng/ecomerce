import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="0 20px"
      // backgroundImage="linear-gradient(to right, #ff5252, #ff1744)" // Vibrant gradient background
      color="#fff" // Text color
    >
      <Box
        maxWidth="600px"
        bgcolor="rgba(0, 0, 0, 0.6)" // Semi-transparent background
        padding="40px"
        borderRadius="8px"
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Xclusive Mart
        </Typography>
        <Typography variant="body1" paragraph>
          Xclusive world for solutions
        </Typography>
        <Button variant="contained" color="secondary">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
