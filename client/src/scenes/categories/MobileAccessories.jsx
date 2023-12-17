import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Accessory Combo Packs",
    image: "MobilePhones.png",
    link: "/MobilePhones",
  },
  {
    name: "Accessory Kits",
    image: "Tablets.jpg",
    link: "/Tablets",
  },
  {
    name: "Adapters",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Armband",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Batteries",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Battery Packs",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Battery Chargers",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Bluetooth Accessories",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Bluetooth Headsets",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Cables",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },

  {
    name: "Caller ID Displays",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Car Accessories",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Cases",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Clips",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Sleeves",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Cellphone Skins",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Chargers & Power Adapters",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Corded Headsets",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Data & Connectivity",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Earphone Jack",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Fashion Accessories",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Handset Cords",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Holsters",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Lens Attachments",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Memory Cards",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Mounts & Stands",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Phone Charms",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Portable Speakers & Audio Docks",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Repair Kits",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Replacement Parts",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Replacement Tools",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Screen Protectors",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Selfie Sticks & Tripods",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "SIM-related Accessories",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Smart Watches",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Smart Watch Accessories",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Smartphone Cameras Lenses",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Smartphone Hold Rring",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Smartphone Keyboards",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Styluses",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Touch Pens",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "USB Sync & Charging Cables",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Virtual Reality Headsets",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Mobile Game Controllers",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
  {
    name: "Ring Lights & Mobile Flashes",
    image: "EarPhones.jpg",
    link: "/MobileAccessories",
  },
];

const MobileAccessories = () => {
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
          Mobile Accessories
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

export default MobileAccessories;
