import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
// import { shades } from "../../theme";

const PostDetails = () => {
  const { postId } = useParams();
  const [value, setValue] = useState("description");
  const [post, setPost] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getPost() {
    try {
      const response = await fetch(
        `https://emile12server.onrender.com/api/posts/${postId}?populate=image,author`
      );
      const postData = await response.json();
      setPost(postData.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Box width="80%" m="80px auto">
      {post && (
        <>
          {/* POST TITLE */}
          <Typography variant="h3">{post.attributes.Title}</Typography>

          {/* POST IMAGE */}
          {post.attributes.image && (
            <img
              src={post.attributes.image.data.attributes.url}
              alt={post.attributes.Title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          {/* POST author */}
          <div>Author: {post.attributes.author?.data?.attributes?.Name}</div>
          {/* POST Excerpt */}
          <Box mt={2}>
            <Typography variant="body1">{post.attributes.Excerpt}</Typography>
          </Box>
          {/* POST CONTENT */}
          <Box mt={2}>
            <Typography variant="body1">{post.attributes.Content}</Typography>
          </Box>

          {/* TABS */}
          {/* <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="DESCRIPTION" value="description" />
              <Tab label="AUTHOR" value="author" />
            </Tabs>
          </Box> */}

          {/* TAB CONTENT */}
          {/* {value === "description" && <div>{post.attributes.Content}</div>}
          {value === "author" && (
            <div>Author: {post.attributes.author?.data?.attributes?.Name}</div>
          )} */}
        </>
      )}
    </Box>
  );
};

export default PostDetails;
