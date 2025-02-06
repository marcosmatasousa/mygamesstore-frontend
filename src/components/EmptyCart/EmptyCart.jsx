import styles from './styles.js';

import { Box, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function EmptyCart() {
  function backHome() {
    window.location.href = `/`;
  }

  return (
    <Box sx={styles.empty}>
      <Typography sx={styles.empty.typography} variant="h4">
        Seu carrinho está vazio.
      </Typography>
      <Typography sx={styles.empty.typography} variant="body1">
        Deseja olhar outros produtos?
      </Typography>
      <Button onClick={backHome} sx={styles.empty.button} variant="contained">
        <ShoppingCartIcon />
        <Typography sx={styles.empty.typography} variant="body2">
          CONTINUAR COMPRANDO
        </Typography>
      </Button>
    </Box>
  );
}
