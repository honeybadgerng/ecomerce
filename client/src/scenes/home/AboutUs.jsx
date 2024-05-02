import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="0 20px"
      bgcolor="#f8f8f8" // Light gray background color
    >
      <Box
        maxWidth="800px"
        bgcolor="#fff" // White background color for content
        padding="40px"
        borderRadius="8px"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)" // Shadow effect
      >
        <Typography variant="h2" gutterBottom color="#333">
          {" "}
          {/* Dark gray text color */}
          About Us
        </Typography>
        <Typography variant="body1" paragraph color="#666">
          {" "}
          {/* Medium gray text color */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
          nulla eu ante placerat volutpat vel vel purus. Nulla facilisi. Nulla
          ac massa ac odio vestibulum ultricies. Vivamus tempus massa a elit
          vehicula, eu consectetur velit varius. Curabitur nec condimentum
          justo.
        </Typography>
        <Typography variant="body1" paragraph color="#666">
          Nam mollis augue sit amet nunc placerat, a vulputate lacus faucibus.
          Proin sagittis elit nec magna posuere, vel tristique tortor
          condimentum. Nam fermentum auctor augue, vel pharetra sapien fermentum
          vel.
        </Typography>
        <Typography variant="body1" color="#666">
          Integer in libero vehicula, suscipit neque ac, porta nunc. Cras
          pharetra commodo leo sit amet laoreet. Donec non aliquet urna. Fusce
          vel fermentum odio. Suspendisse potenti.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
