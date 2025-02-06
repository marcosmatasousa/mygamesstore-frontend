import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import { fetchGamesAPI } from "../../utils/utils.js";
import SearchBar from "../../components/SearchBar/SearchBar";
import Product from "../../components/Product/Product.jsx";

import styles from "./styles.js";

export default function SearchPage({ addToCart }) {
  const { searchTerm } = useParams();
  const [games, setGames] = useState([]);
  const [counter, setCounter] = useState(0);
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);

  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await fetchGamesAPI(currentPage, searchTerm);
        setGames(data);
        setCounter(data.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGames();
  }, [currentPage]);

  let gamesData;
  if (games) {
    gamesData = games.map((game, index) => {
      return (
        <Product
          name={game.name}
          price={game.price}
          imgUrl={game.background_image}
          genres={game.genres}
          productId={game._id}
          addToCart={addToCart}
          key={index}
        />
      );
    });
  }

  function handlePageChange(event, newPage) {
    window.scrollTo(0, 0);
    window.location.href = `/search/${searchTerm}/${newPage}`;
  }

  useEffect(() => {
    setCurrentPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  return (
    <Box component="main" sx={styles.container}>
      <Box sx={styles.search}>
        <Typography
          sx={{ fontSize: "2.75vw", fontWeight: "bold", marginBottom: "3vh" }}
          variant="h1"
        >
          {`Exibindo resultados de '${searchTerm}'`}
        </Typography>
        <SearchBar />
      </Box>
      <Box component="section" sx={styles.games}>
        {gamesData}
      </Box>
      <Pagination
        page={currentPage}
        count={Math.ceil(counter / 12)}
        onChange={handlePageChange}
        sx={{ marginBottom: "2%" }}
      />
    </Box>
  );
}
