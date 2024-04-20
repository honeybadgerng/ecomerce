import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getPost() {
    const item = await fetch(
      `https://emile12server.onrender.com/api/posts/${postId}?populate=image`,
      {
        method: "GET",
      }
    );
    const postJson = await post.json();
    setPost(postJson.data);
  }

  async function getPosts() {
    const posts = await fetch(
      `https://emile12server.onrender.com/api/posts?populate=image`,
      {
        method: "GET",
      }
    );
    const postsJson = await posts.json();
    setPosts(postsJson.data);
  }

  useEffect(() => {
    getPost();
    getPosts();
  }, [postId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          {post?.attributes?.image?.data?.attributes?.formats?.thumbnail
            ?.url ? (
            <img
              alt={post?.attributes?.name}
              width="100%"
              height="100%"
              src={
                post?.attributes?.image?.data?.attributes?.formats?.thumbnail
                  ?.url
              }
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div>No Image Available</div>
          )}
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{post?.attributes?.title}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {post?.attributes?.Content}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            ></Box>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0"></Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && <div>{post?.attributes?.content}</div>}
      </Box>

      {/* RELATED ITEMS */}
    </Box>
  );
};

export default PostDetails;
