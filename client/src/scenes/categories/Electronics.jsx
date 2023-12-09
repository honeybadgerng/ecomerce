import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "TELEVISION & VIDEO", image: "Television.jpg", link: "/Televisions" },
  {
    name: "CAMERAS & PHOTOS",
    image: "Camera.jpg",
    link: "/Cameras",
  },
  {
    name: "HOME AUDIOS",
    image: "HomeTheatres.png",
    link: "/Homeaudios",
  },
  {
    name: "Generators and Portable Power",
    image: "GeneratorsAndInverters.jpg",
    link: "/Generators",
  },
  {
    name: "Air Conditioners & Accessories",
    image: "Air ConditionersAndAccessories.jpg",
    link: "/AirConditionersAndAccessories",
  },
  {
    name: "Fridges",
    image: "Fridges.jpg",
    link: "/Fridges",
  },
  {
    name: "Washing Machines & Dryers",
    image: "WashingMachinesAndDryers.jpg",
    link: "/WashingMachinesAndDryers",
  },
  {
    name: "Freezers",
    image: "Freezers.jpg",
    link: "/Freezers",
  },
];

const Electronics = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      const importedImages = {};
      for (const category of categories) {
        const { default: image } = await import(
          `../../assets/categories/${category.image}`
        );
        importedImages[category.image] = image;
      }
      setImages(importedImages);
    };

    importImages();
  }, []);

  return (
    <Grid container spacing={2} sx={{ marginTop: "80px" }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Electronics
        </Typography>
      </Grid>

      {categories.map((category, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "300px", // Set a fixed height for the container
            }}
          >
            <Link to={category.link} style={{ textDecoration: "none" }}>
              <img
                src={images[category.image]}
                alt={category.name}
                style={{ width: "100%", marginBottom: "8px" }}
              />
              <Typography variant="body1">{category.name}</Typography>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Electronics;
