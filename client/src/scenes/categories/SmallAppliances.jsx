import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  { name: "Blenders", image: "Blenders.jpg", link: "/Blenders" },
  {
    name: "Juicers",
    image: "Juicers.jpg",
    link: "/Juicers",
  },
  {
    name: "Mixers",
    image: "Mixers.jpeg",
    link: "/Mixers",
  },
  {
    name: "Toasters",
    image: "Toasters.jpg",
    link: "/Toasters",
  },
  {
    name: "Microwave Ovens",
    image: "MicrowaveOvens.png",
    link: "/MicrowaveOvens",
  },
  {
    name: "Soda Makers",
    image: "SodaMakers.jpg",
    link: "/SodaMakers",
  },
  {
    name: "Steamers",
    image: "Steamers.jpg",
    link: "/Steamers",
  },
  {
    name: "Air Fryers",
    image: "AirFryers.jpg",
    link: "/AirFryers",
  },
  {
    name: "Bread Machines",
    image: "BreadMachines.jpg",
    link: "/BreadMachines",
  },
  {
    name: "Beer Keg Refrigerators",
    image: "BeerKegRefrigerators.jpg",
    link: "/BeerKegRefrigerators",
  },
  {
    name: "Beverage Refrigerators",
    image: "BeverageRefrigerators.jpg",
    link: "/BeverageRefrigerators",
  },
  {
    name: "Deep Fryers",
    image: "DeepFryers.jpg",
    link: "/DeepFryers",
  },
  {
    name: "Hot Pots",
    image: "HotPots.jpg",
    link: "/HotPots",
  },
  {
    name: "Ice Cream Machines",
    image: "IceCreamMachines.jpg",
    link: "/IceCreamMachines",
  },

  {
    name: "Food Processors",
    image: "FoodProcessors.jpg",
    link: "/FoodProcessors",
  },
  {
    name: "Electric Woks",
    image: "ElectricWoks.jpg",
    link: "/ElectricWoks",
  },
  {
    name: "Electric Pressure Cookers",
    image: "ElectricPressureCookers.jpg",
    link: "/ElectricPressureCookers",
  },
  {
    name: "Electric Cookware",
    image: "ElectricCookware.jpg",
    link: "/ElectricCookware",
  },
  {
    name: "Electric Drink Mixers",
    image: "ElectricDrinkMixers.jpg",
    link: "/ElectricDrinkMixers",
  },
  {
    name: "Electric Skillets",
    image: "ElectricSkillets.jpg",
    link: "/ElectricSkillets",
  },
  {
    name: "Electric Griddles",
    image: "ElectricGriddles.jpg",
    link: "/ElectricGriddles",
  },
  {
    name: "Compact Refrigerators",
    image: "CompactRefrigerators.jpg",
    link: "/CompactRefrigerators",
  },
  {
    name: "Contact Grills",
    image: "ContactGrills.jpg",
    link: "/ContactGrills",
  },
  {
    name: "Conventional Burners",
    image: "ConventionalBurners.jpg",
    link: "/Burners",
  },
  {
    name: "Rice Cookers",
    image: "RiceCookers.jpg",
    link: "/RiceCookers",
  },
  {
    name: "Slow Cookers",
    image: "SlowCookers.jpg",
    link: "/SlowCookers",
  },
  {
    name: "Waffle Irons",
    image: "WaffleIrons.jpg",
    link: "/WaffleIrons",
  },
  {
    name: "Wine Cellars",
    image: "WineCellars.jpg",
    link: "/WineCellars",
  },
  {
    name: "Specialty Appliances",
    image: "SpecialtyAppliances.jpg",
    link: "/SpecialtyAppliances",
  },
  {
    name: "Small Appliance Sets",
    image: "CoffeeTeaEspressoAppliances.jpg",
    link: "/SmallApplianceSets",
  },
  {
    name: "Coffee, Tea & Espresso Appliances",
    image: "CoffeeMakers.jpg",
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
      <Typography variant="paragraph" align="center" gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        maxime animi debitis. Id, saepe? Labore blanditiis, alias quod et aut
        voluptates in distinctio rem totam accusantium unde esse fugit velit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat eum
        saepe dolorum, nam doloremque eius molestias expedita cumque quas atque?
        Voluptate neque saepe ullam aspernatur quaerat ipsam optio sint? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. At dicta accusamus
        iure ipsum quae facere perspiciatis suscipit reiciendis sint iste
        explicabo quidem dolores consequuntur, architecto dolorem natus hic,
        odio saepe! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
        nisi, praesentium eos, facere sit, ullam molestias nam sunt officia ipsa
        nihil asperiores nostrum dolores sapiente voluptatum ipsam a quam?
        Repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem rerum, repellat, corrupti totam, culpa eligendi nihil ut officiis
        mollitia maxime beatae commodi ipsum ad in et repellendus numquam
        temporibus quia!
      </Typography>
    </Grid>
  );
};

export default SmallAppliances;
