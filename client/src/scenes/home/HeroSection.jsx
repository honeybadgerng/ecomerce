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
      // backgroundImage={`url(${process.env.PUBLIC_URL}/assets/hero/hero-1.png)`} // Corrected the URL for the background image
      // backgroundSize="cover"
      // backgroundPosition="center"
    >
      <Box
        maxWidth="600px"
        bgcolor="rgba(255, 255, 255, 0.8)"
        padding="20px"
        borderRadius="8px"
      >
        {/* Added a semi-transparent background */}
        <Typography variant="h2" gutterBottom>
          Welcome to Xclusive Mart
        </Typography>
        <Typography variant="body1" paragraph>
          Xclusive world for solutions
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
