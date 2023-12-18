import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Apple (Ipads)", image: "iphone.jpg", link: "/Ipads" },
  {
    name: "Samsung",
    image: "Samsung.jpg",
    link: "/SamsungTablets",
  },
  {
    name: "Nokia",
    image: "Nokia.jpg",
    link: "/NokiaTablets",
  },
  {
    name: "Tecno",
    image: "Tecno.jpg",
    link: "/TecnoTablets",
  },
  {
    name: "Infinix",
    image: "Infinix.jpg",
    link: "/InfinixTablets",
  },
  {
    name: "Oppo",
    image: "Oppo.jpg",
    link: "/OppoTablets",
  },
  {
    name: "Hauwei",
    image: "Hauwei.jpg",
    link: "/HauweiTablets",
  },
  {
    name: "Innjoo",
    image: "Innjoo.png",
    link: "/InnjooTablets",
  },
  {
    name: "Itel",
    image: "Itel.png",
    link: "/ItelTablets",
  },
  {
    name: "Lenovo",
    image: "Lenovo.jpg",
    link: "/LenovoTablets",
  },

  {
    name: "Sony",
    image: "Sony.jpg",
    link: "/SonyTablets",
  },
];

const Tablets = () => {
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
          Tablets
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

export default Tablets;
