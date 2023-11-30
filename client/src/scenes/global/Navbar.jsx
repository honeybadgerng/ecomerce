import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  IconButton,
  MenuItem,
  Link as RouterLink,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { shades } from "../../theme";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    // Add your logic for each menu item, such as navigation or dispatching actions
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          eMile12
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton onClick={handleMenuClick} sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>

      {/* Menu items */}
      {isMenuOpen && (
        <Box
          position="absolute"
          top="60px"
          right="0"
          width="200px"
          backgroundColor="white"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
          zIndex="3"
        >
          <MenuItem onClick={() => handleMenuItemClick("Supermarket")}>
            <RouterLink to="/about" color="inherit">
              Supermarket
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Health & Beauty ")}>
            <RouterLink to="/categories" color="inherit">
              Health & Beauty
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Appliances")}>
            <RouterLink to="/manual-order" color="inherit">
              Appliances
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Phones & Tablets")}>
            <RouterLink to="/contact" color="inherit">
              Phones & Tablets
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Computing")}>
            <RouterLink to="/contact" color="inherit">
              Computing
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Electronics")}>
            <RouterLink to="/contact" color="inherit">
              Electronics
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Fashion")}>
            <RouterLink to="/contact" color="inherit">
              Fashion
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Baby Products")}>
            <RouterLink to="/contact" color="inherit">
              Baby Products
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Gaming")}>
            <RouterLink to="/contact" color="inherit">
              Gaming
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Sporting Goods")}>
            <RouterLink to="/contact" color="inherit">
              Sporting Goods
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Pet supplies")}>
            <RouterLink to="/contact" color="inherit">
              Pet supplies
            </RouterLink>
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("Books, Movies & Music")}
          >
            <RouterLink to="/contact" color="inherit">
              Books, Movies & Music
            </RouterLink>
          </MenuItem>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
