import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";

const Post = ({ post, width }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  // Access post attributes
  const { Title, Excerpt, image } = post.attributes;
  const url =
    image?.data?.attributes?.formats?.medium?.url ||
    image?.data?.attributes?.formats?.large?.url ||
    image?.data?.attributes?.formats?.xlarge?.url ||
    image?.data?.attributes?.formats?.small?.url ||
    image?.data?.attributes?.formats?.xsmall?.url ||
    image?.data?.attributes?.formats?.thumbnail?.url ||
    "";

  // Access author's name
  const authorName =
    post?.attributes?.author?.data?.attributes?.Name || "unknown author ";

  const handleNavigation = () => {
    console.log("Navigating to slug:", post.attributes.slug); // Access the slug property
    navigate(`/post/${post.attributes.slug}`);
  };

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNavigation}
        style={{ cursor: "pointer" }}
      >
        <img
          alt={Title}
          width="300px"
          height="400px"
          src={`${url}`} // Assuming 'featuredImage' is an object with a 'url' property
        />
        {isHovered && (
          <Box
            position="absolute"
            bottom="10%"
            left="0"
            width="100%"
            padding="0 5%"
            backgroundColor={shades.neutral[100]}
            borderRadius="3px"
          >
            <Typography variant="body2" fontWeight="bold">
              {authorName}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {new Date(post.attributes.publishedAt).toLocaleDateString()}
            </Typography>
          </Box>
        )}
      </Box>

      <Box mt={2} onClick={handleNavigation} style={{ cursor: "pointer" }}>
        <Typography variant="h6">{Title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {Excerpt}
        </Typography>
      </Box>
    </Box>
  );
};

export default Post;
