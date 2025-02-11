import { useState } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import AddToCartButton from "../AddToCartButton/AddToCartButton.jsx";

import { Link } from "react-router-dom";

import styles from "./styles.js";

export default function Product({
  name,
  releaseDate,
  price,
  imgUrl,
  genres,
  productId,
  addToCart,
  short_screenshots,
  tags,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const displayGenres = genres.map((genre, index) => {
    return (
      <Chip
        label={genre}
        size="small"
        sx={styles.cardContent.chip}
        key={index}
      />
    );
  });

  return (
    <Card sx={styles.card}>
      <Link
        to={`/products/${name}`}
        state={{
          imgUrl,
          short_screenshots,
          genres,
          price,
          productId,
          releaseDate,
          tags,
        }}
      >
        <CardMedia
          component="img"
          image={imgUrl}
          alt={name}
          sx={styles.cardMedia}
        />

        <CardContent sx={styles.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.cardContent.typography}
          >
            {name}
          </Typography>

          <Box sx={styles.cardContent.box}>{displayGenres}</Box>
        </CardContent>
      </Link>
      <CardActions sx={styles.cardActions}>
        <AddToCartButton
          productId={productId}
          price={price}
          addToCart={addToCart}
        />
      </CardActions>
    </Card>
  );
}
