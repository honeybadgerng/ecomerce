import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(true);
  const {
    palette: { neutral },
  } = useTheme();

  const { price, name, image } = item.attributes;
  // Check if 'image' is defined and has the required properties
  const url =
    image?.data?.attributes?.formats?.medium?.url ||
    image?.data?.attributes?.formats?.large?.url ||
    image?.data?.attributes?.formats?.xlarge?.url ||
    image?.data?.attributes?.formats?.small?.url ||
    image?.data?.attributes?.formats?.xsmall?.url ||
    image?.data?.attributes?.formats?.thumbnail?.url ||
    "";

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(true)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`${url}`}
          onClick={() => navigate(`/item/${item.attributes.slug}`)} // Access the slug property
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}></Typography>
        {/* removed to fix bug */}
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">₦{price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
