import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Apple (Iphone)", image: "MobilePhones.png", link: "/MobilePhones" },
  {
    name: "Samsung",
    image: "Tablets.jpg",
    link: "/Tablets",
  },
  {
    name: "Nokia",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Tecno",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Infinix",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Oppo",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Hauwei",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Innjoo",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Itel",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Lenovo",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },

  {
    name: "Sony",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
];

const MobilePhones = () => {
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
          Mobile Phones
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

export default MobilePhones;
