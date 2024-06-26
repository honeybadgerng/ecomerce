import React, { useState, useEffect, useRef } from "react";
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
  Close,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { shades } from "../../theme";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          Xclusive Mart
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
          <IconButton onMouseDown={handleMenuClick} sx={{ color: "black" }}>
            {isMenuOpen ? <Close /> : <MenuOutlined />}
          </IconButton>
        </Box>
      </Box>

      {/* Menu items */}
      {isMenuOpen && (
        <Box
          ref={menuRef}
          position="absolute"
          top="60px"
          right="0"
          width="200px"
          backgroundColor="white"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
          zIndex="3"
        >
          <MenuItem onClick={() => navigate("ShopByCategory")}>
            <RouterLink to="/ShopByCategory" color="inherit">
              Shop By Category
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => navigate("AboutUs")}>
            <RouterLink to="/AboutUs" color="inherit">
              About us
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => navigate("Blogs")}>
            <RouterLink to="/Blogs" color="inherit">
              Blogs
            </RouterLink>
          </MenuItem>
          <MenuItem onClick={() => navigate("Footer")}>
            <RouterLink to="/Footer" color="inherit">
              Contact
            </RouterLink>
          </MenuItem>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
