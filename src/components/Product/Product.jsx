import { useState } from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom';

import styles from './styles.js';

export default function Product({
  name,
  price,
  imgUrl,
  genres,
  productId,
  addToCart,
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
      <Link to={`/products/${name}`}>
        <CardMedia
          component="img"
          image={imgUrl}
          alt={name}
          loading="lazy"
          sx={styles.cardMedia}
        />
      </Link>
      <CardContent sx={styles.cardContent}>
        <Link to={`/products/${name}`}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.cardContent.typography}
          >
            {name}
          </Typography>
        </Link>
        <Box sx={styles.cardContent.box}>{displayGenres}</Box>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button
          sx={styles.cardActions.button}
          size="large"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => addToCart(productId)}
        >
          {isHovered ? (
            <>
              <ShoppingCartIcon sx={styles.cardActions.button.cart} />
              {`U$D ${price}`}
            </>
          ) : (
            <>{`U$D ${price}`}</>
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
