import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Post from "../../components/Post";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const Posts = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const breakPoint = useMediaQuery("(min-width:600px)");

  // // Fetch author from the API
  // async function getAuthor() {
  //   try {
  //     const response = await fetch(
  //       "https://emile12server.onrender.com/api/posts?populate[0]=author",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const author = await response.json();
  //     setAuthor(author.data);
  //     console.log(author);
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //   }
  // }

  // useEffect(() => {
  //   getAuthor();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Fetch posts from the API
  async function getPosts() {
    try {
      const response = await fetch(
        "https://emile12server.onrender.com/api/posts?populate=image,author",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setPosts(data.data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  // Logic for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our <b>blog posts</b>
      </Typography>

      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {currentPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Box>

      {/* Pagination */}
      <Box textAlign="center" marginTop="20px">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </Box>
    </Box>
  );
};

export default Posts;
