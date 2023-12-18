import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Accessory Combo Packs",
    image: "AccessoryComboPacks.jpg",
    link: "/MobilePhonesAccessoryComboPacks",
  },
  {
    name: "Accessory Kits",
    image: "AccessoryKits.jpg",
    link: "/AccessoryKits",
  },
  {
    name: "Adapters",
    image: "Adapters.jpg",
    link: "/Adapters",
  },
  {
    name: "Armbands",
    image: "Armbands.jpg",
    link: "/MobileArmbands",
  },
  {
    name: "Batteries",
    image: "Batteries.jpg",
    link: "/MobilePhoneBatteries",
  },
  {
    name: "Battery Packs",
    image: "BatteryPacks.jpg",
    link: "/BatteryPacks",
  },
  {
    name: "Battery Chargers",
    image: "MobilePhoneChargers.jpg",
    link: "/MobilePhoneChargers",
  },
  {
    name: "Bluetooth Accessories",
    image: "BluetoothAccessories.jpg",
    link: "/BluetoothAccessories",
  },

  {
    name: "Cables",
    image: "MobileCables.jpg",
    link: "/MobileCables",
  },
  {
    name: "Car Accessories",
    image: "CarAccessories.jpg",
    link: "/CarAccessories",
  },
  {
    name: "Cases",
    image: "Casings.jpg",
    link: "/MobileCasings",
  },
  {
    name: "Cases & Clips",
    image: "CasesAndClips.jpg",
    link: "/CasesAndClips",
  },
  {
    name: "Earphone Jacks",
    image: "EarphoneJacks.jpg",
    link: "/EarphoneJacks",
  },
  {
    name: "Holsters",
    image: "Holsters.jpg",
    link: "/MobileHolsters",
  },
  {
    name: "Lens Attachments",
    image: "LensAttachments.jpg",
    link: "/LensAttachments",
  },
  {
    name: "Memory Cards",
    image: "MemoryCards.jpg",
    link: "/MemoryCards",
  },
  {
    name: "Mounts & Stands",
    image: "MountsAndStands.jpg",
    link: "/MountsAndStands",
  },
  {
    name: "Repair Kits",
    image: "RepairKits.jpg",
    link: "/RepairKits",
  },
  {
    name: "Screen Protectors",
    image: "ScreenProtectors.jpg",
    link: "/ScreenProtectors",
  },
  {
    name: "Selfie Sticks & Tripods",
    image: "SelfieSticksAndTripods.jpg",
    link: "/SelfieSticksAndTripods",
  },
  {
    name: "Smart Watches & Accessories",
    image: "SmartWatchesAndAccessories.jpg",
    link: "/SmartWatchesAndAccessories",
  },
  {
    name: "Mobile Game Controllers",
    image: "MobileGameControllers.jpg",
    link: "/MobileGameControllers",
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
