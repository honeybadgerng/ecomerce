import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PostDetails = () => {
  const { postId } = useParams(); // This will be your slug
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("postId:", postId); // Log postId to debug
    if (postId) {
      getPost();
    } else {
      console.error("postId is undefined");
    }
  }, [postId]);

  async function getPost() {
    try {
      const response = await fetch(
        `https://emile12server.onrender.com/api/posts?filters[slug][$eq]=${postId}&populate=image,author`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const postData = await response.json();
      setPost(postData.data[0]); // Assuming the API returns an array
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  return (
    <Box width="80%" m="80px auto">
      {post && (
        <>
          {/* POST TITLE */}
          <ReactMarkdown>{post.attributes.Title}</ReactMarkdown>

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

          {/* POST CONTENT */}
          <Box mt={2}>
            <ReactMarkdown>{post.attributes.Content}</ReactMarkdown>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PostDetails;
