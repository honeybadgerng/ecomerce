import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Supermarket", image: "beverages.jpg", link: "/Supermarket" },
  {
    name: "eMile12",
    image: "eMile12logo.png",
    link: "/eMile12",
  },
  {
    name: "Health & Beauty",
    image: "healthAndbeauty.jpg",
    link: "/healthAndBeauty",
  },

  {
    name: "Appliances",
    image: "Air ConditionersAndAccessories.jpg",
    link: "/Appliances",
  },
  {
    name: "Phones & Tablets",
    image: "MobilePhones.png",
    link: "/PhonesAndTablets",
  },
  {
    name: "Computing",
    image: "laptops.jpg",
    link: "/Computing",
  },
  {
    name: "Electronics",
    image: "Fridges.jpg",
    link: "/electronics",
  },
  {
    name: "Fashion",
    image: "WashingMachinesAndDryers.jpg",
    link: "/fashion",
  },
  {
    name: "Baby Products",
    image: "babyProducts.jpg",
    link: "/babyProducts",
  },
  {
    name: "Gaming",
    image: "playstation.jpg",
    link: "/gaming",
  },
  {
    name: "Sporting Goods",
    image: "sportingGoods.jpg",
    link: "/sportingGoods",
  },
  {
    name: "Pet supplies",
    image: "petSupplies.jpg",
    link: "/petSupplies",
  },
  {
    name: "Books, Movies & Music",
    image: "ebook.jpg",
    link: "/booksMoviesAndMusic",
  },
  {
    name: "Building Materials",
    image: "buildingMaterials.jpg",
    link: "/ComingSoon",
  },
];

const ShopByCategory = () => {
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
          Shop by Category
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

export default ShopByCategory;
