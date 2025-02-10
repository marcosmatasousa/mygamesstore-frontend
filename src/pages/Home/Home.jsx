import { useState, useEffect } from "react";
import { fetchGamesAPI, fetchGamesCountAPI } from "../../utils/utils.js";

import { Box, Pagination, Typography } from "@mui/material";
import Product from "../../components/Product/Product.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Skeleton from "@mui/material/Skeleton";

import { useParams } from "react-router-dom";

import styles from "./styles.js";

export default function Home({ addToCart }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);

  useEffect(() => {
    async function fetchGamesCount() {
      try {
        const data = await fetchGamesCountAPI();
        setCounter(data.count);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGamesCount();
  }, []);

  function handlePageChange(event, newPage) {
    setLoading(true);
    window.scrollTo(0, 0);
    window.location.href = `/${newPage}`;
    setLoading(false);
  }

  useEffect(() => {
    setCurrentPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  useEffect(() => {
    async function fetchGames() {
      setLoading(true);
      try {
        const data = await fetchGamesAPI(currentPage);
        setGames(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchGames();
  }, [currentPage]);

  const loadingGames = Array(12).fill(
    <Box sx={styles.skeleton}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ height: "20.5vh" }}
      />
      <Box sx={styles.skeleton.content}>
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "1.5vw", marginBottom: -0.8 }}
        />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1.3vw" }} />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ marginTop: 2, fontSize: "2vw" }}
        />
      </Box>
    </Box>
  );

  let gamesData;
  if (games.length > 0) {
    gamesData = games.map((game) => {
      return (
        <Product
          name={game.name}
          price={game.price}
          imgUrl={game.background_image}
          genres={game.genres}
          short_screenshots={game.short_screenshots}
          productId={game._id}
          releaseDate={game.released}
          addToCart={addToCart}
          tags={game.tags}
          key={game._id}
        />
      );
    });
  }

  return (
    <>
      <Box component="main" sx={styles.container}>
        <Box sx={styles.search}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="h1"
              sx={{ fontSize: "2.75vw", borderRadius: 2 }}
            />
          ) : (
            <Typography
              sx={{
                fontSize: "2.75vw",
                fontWeight: "bold",
                marginBottom: "3vh",
              }}
              variant="h1"
            >
              Catálogo
            </Typography>
          )}

          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{ marginTop: 2, fontSize: "3vw", borderRadius: 2 }}
            />
          ) : (
            <SearchBar />
          )}
        </Box>
        <Box component="section" sx={styles.games}>
          {loading ? loadingGames : gamesData}
        </Box>
        {!loading && (
          <Pagination
            page={currentPage}
            count={Math.ceil(counter / 12)}
            onChange={handlePageChange}
            color="primary"
            sx={{ marginBottom: "2%", color: "white" }}
          />
        )}
      </Box>
    </>
  );
}
