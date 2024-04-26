import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ComingSoon = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="0 20px"
      background="linear-gradient(to right, #ff5252, #ff1744)" // Vibrant background gradient
      color="#fff" // Text color
    >
      <Box
        maxWidth="600px"
        bgcolor="rgba(0, 0, 0, 0.6)" // Semi-transparent background
        padding="40px"
        borderRadius="8px"
      >
        <Typography variant="h2" gutterBottom>
          Coming Soon!
        </Typography>
        <Typography variant="body1" paragraph>
          We're working hard to bring you something amazing. Stay tuned!
        </Typography>
        <Button variant="contained" color="secondary">
          Get Notified
        </Button>
      </Box>
    </Box>
  );
};

export default ComingSoon;
