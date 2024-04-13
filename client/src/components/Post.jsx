import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";

const Post = ({ post, width }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const { author, title, Excerpt, image } = post.attributes;
  const url = image?.data?.attributes?.formats?.thumbnail?.url || "";

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`/post/${post.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img
          alt={title}
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
              {author.Name}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {new Date(post.attributes.publishedAt).toLocaleDateString()}
            </Typography>
          </Box>
        )}
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle2" color="textSecondary">
          {Excerpt}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Box>
  );
};

export default Post;
