import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Grains & Rice", image: "grains_rice.jpg", link: "/grainsAndRice" },
  {
    name: "Pasta & Noodles",
    image: "pasta_noodles.jpg",
    link: "/pastaAndNoodles",
  },
  {
    name: "Breakfast Foods",
    image: "breakfast_foods.jpg",
    link: "/breakfastFoods",
  },
  {
    name: "Herbs, Spices & Seasoning",
    image: "herbs_spices_seasoning.jpg",
    link: "/herbsSpicesSeasoning",
  },
  { name: "Flours & Meals", image: "flours_meals.jpg", link: "/floursMeals" },
  { name: "Malt Drinks", image: "malt_drinks.jpg", link: "/maltDrinks" },
  { name: "Coffee", image: "coffee.jpg", link: "/coffee" },
  { name: "Water", image: "water.jpg", link: "/water" },
  { name: "Cooking Oil", image: "cooking_oil.jpg", link: "/cookingOil" },
  { name: "Juices", image: "juices.jpg", link: "/juices" },
  { name: "Soft Drinks", image: "soft_drinks.jpeg", link: "/softDrinks" },
  {
    name: "Canned & Packaged Foods",
    image: "canned_packaged_foods.jpg",
    link: "/cannedPackagedFoods",
  },
  {
    name: "Candy & Chocolate",
    image: "candy_chocolate.png",
    link: "/candyChocolate",
  },
  {
    name: "Syrups, Sugars & Sweeteners",
    image: "syrups_sugars_sweeteners.jpg",
    link: "/syrupsSugarsSweeteners",
  },
];

const FoodCupboard = () => {
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
          Food Cupboard
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

export default FoodCupboard;
