import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useState } from "react";

import styles from "./styles.js";

export default function AddToCartButton({ productId, price, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      sx={styles.button}
      size="large"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => addToCart(productId)}
    >
      {isHovered ? (
        <>
          <ShoppingCartIcon sx={{ width: "2vw" }} />
          {`U$D ${price}`}
        </>
      ) : (
        <>{`U$D ${price}`}</>
      )}
    </Button>
  );
}
