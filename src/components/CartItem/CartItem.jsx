import { Box, ListItem, Divider, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import styles from "./styles.js";

export default function CartItem({
  name,
  backgroundImage,
  price,
  id,
  removeProduct,
}) {
  return (
    <>
      <ListItem sx={styles.item}>
        <Box sx={styles.game}>
          <Link to={`/products/${name}`}>
            <Box
              sx={styles.game.image}
              component="img"
              alt="game image"
              src={backgroundImage}
            />
          </Link>
          <Box sx={styles.game.description}>
            <Link to={`/products/${name}`}>
              <Typography variant="body1" sx={styles.product}>
                {name}
              </Typography>
            </Link>
            <Typography variant="body2" sx={styles.game.activation}>
              Chave de ativação
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.game.price}>
          <Typography
            variant="body2"
            sx={styles.game.price}
          >{`$ ${price}`}</Typography>
          <IconButton onClick={() => removeProduct(id)}>
            <DeleteIcon sx={{ color: "white", width: "2vw", height: "3vh" }} />
          </IconButton>
        </Box>
      </ListItem>
      <Divider component="li" />
    </>
  );
}
