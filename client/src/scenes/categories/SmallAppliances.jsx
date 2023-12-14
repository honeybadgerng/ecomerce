import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Blenders", image: "foodCupboard.jpg", link: "/Blenders" },
  {
    name: "Juicers",
    image: "beverages.jpg",
    link: "/Juicers",
  },
  {
    name: "Mixers",
    image: "beerWineSpirits.jpeg",
    link: "/Mixers",
  },
  {
    name: "Toasters",
    image: "babyProducts.jpg",
    link: "/Toasters",
  },
  {
    name: "Microwave Ovens",
    image: "householdCleaningProducts.jpg",
    link: "/MicrowaveOvens",
  },
  {
    name: "Soda Makers",
    image: "householdCleaningProducts.jpg",
    link: "/SodaMakers",
  },
  {
    name: "Steamers",
    image: "householdCleaningProducts.jpg",
    link: "/Steamers",
  },
  {
    name: "Air Fryers",
    image: "householdCleaningProducts.jpg",
    link: "/AirFryers",
  },
  {
    name: "Bread Machines",
    image: "householdCleaningProducts.jpg",
    link: "/BreadMachines",
  },
  {
    name: "Beer Keg Refrigerators",
    image: "householdCleaningProducts.jpg",
    link: "/BeerKegRefrigerators",
  },
  {
    name: "Beverage Refrigerators",
    image: "householdCleaningProducts.jpg",
    link: "/BeverageRefrigerators",
  },
  {
    name: "Deep Fryers",
    image: "householdCleaningProducts.jpg",
    link: "/DeepFryers",
  },
  {
    name: "Hot Pots",
    image: "householdCleaningProducts.jpg",
    link: "/HotPots",
  },
  {
    name: "Ice Cream Machines",
    image: "householdCleaningProducts.jpg",
    link: "/IceCreamMachines",
  },
  {
    name: "Deep Fryers",
    image: "householdCleaningProducts.jpg",
    link: "/DeepFryers",
  },
  {
    name: "Food Processors",
    image: "householdCleaningProducts.jpg",
    link: "/FoodProcessors",
  },
  {
    name: "Electric Woks",
    image: "householdCleaningProducts.jpg",
    link: "/ElectricWoks",
  },
  {
    name: "Electric Pressure Cookers",
    image: "householdCleaningProducts.jpg",
    link: "/ElectricPressureCookers",
  },
  {
    name: "Electric Cookware",
    image: "householdCleaningProducts.jpg",
    link: "/ElectricCookware",
  },
  {
    name: "Electric Drink Mixers",
    image: "householdCleaningProducts.jpg",
    link: "/ElectricDrinkMixers",
  },
  {
    name: "Electric Skillets",
    image: "householdCleaningProducts.jpg",
    link: "/ElectricSkillets",
  },
  {
    name: "Electric Griddles",
    image: "householdCleaningProducts.jpg",
    link: "/ElectricGriddles",
  },
  {
    name: "Compact Refrigerators",
    image: "householdCleaningProducts.jpg",
    link: "/CompactRefrigerators",
  },
  {
    name: "Contact Grills",
    image: "householdCleaningProducts.jpg",
    link: "/ContactGrills",
  },
  {
    name: "Conventional Burners",
    image: "householdCleaningProducts.jpg",
    link: "/Burners",
  },
  {
    name: "Rice Cookers",
    image: "householdCleaningProducts.jpg",
    link: "/RiceCookers",
  },
  {
    name: "Slow Cookers",
    image: "householdCleaningProducts.jpg",
    link: "/SlowCookers",
  },
  {
    name: "Waffle Irons",
    image: "householdCleaningProducts.jpg",
    link: "/WaffleIrons",
  },
  {
    name: "Wine Cellars",
    image: "householdCleaningProducts.jpg",
    link: "/WineCellars",
  },
  {
    name: "Specialty Appliances",
    image: "householdCleaningProducts.jpg",
    link: "/SpecialtyAppliances",
  },
  {
    name: "Small Appliance Sets",
    image: "householdCleaningProducts.jpg",
    link: "/SmallApplianceSets",
  },
  {
    name: "Coffee, Tea & Espresso Appliances",
    image: "householdCleaningProducts.jpg",
    link: "/CoffeeAndTeaAppliances",
  },
];

const SmallAppliances = () => {
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
          Small Appliances
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

export default SmallAppliances;
