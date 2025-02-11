import { Box, ListItem, Divider, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import styles from "./styles.js";

export default function CartItem({
  name,
  releaseDate,
  tags,
  imgUrl,
  price,
  productId,
  removeProduct,
  short_screenshots,
  genres,
}) {
  return (
    <>
      <ListItem sx={styles.item}>
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
          <Box sx={styles.game}>
            <Box
              sx={styles.game.image}
              component="img"
              alt="game image"
              src={imgUrl}
            />

            <Box sx={styles.game.description}>
              <Typography variant="body1" sx={styles.product}>
                {name}
              </Typography>

              <Typography variant="body2" sx={styles.game.activation}>
                Chave de ativação
              </Typography>
            </Box>
          </Box>
        </Link>
        <Box sx={styles.game.price}>
          <Typography
            variant="body2"
            sx={styles.game.price}
          >{`$ ${price}`}</Typography>
          <IconButton onClick={() => removeProduct(productId)}>
            <DeleteIcon sx={{ color: "white", width: "2vw", height: "3vh" }} />
          </IconButton>
        </Box>
      </ListItem>
      <Divider component="li" />
    </>
  );
}
