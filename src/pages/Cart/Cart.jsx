import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  Button,
  CircularProgress,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import styles from "./styles.js";
import CartItem from "../../components/CartItem/CartItem.jsx";
import EmptyCart from "../../components/EmptyCart/EmptyCart.jsx";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods.jsx";
import {
  getCartAPI,
  removeProductAPI,
  removeAllProductsAPI,
} from "../../utils/utils.js";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(cart);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCartAPI();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const subtotal = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  const handleClearCart = async () => {
    await removeAllProductsAPI();
    setCart([]);
  };

  function handleDeleteProduct(productId) {
    const productIndex = cart.findIndex((obj) => obj._id == productId);
    cart.splice(productIndex, 1);
    const newCart = [...cart];
    setCart(newCart);
    removeProductAPI(productId);
  }

  if (loading) return <CircularProgress />;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <Box>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.titleContainer.typo} variant="h1">
          Meu carrinho
        </Typography>
        <Link to="/">
          <Button sx={styles.titleContainer.button} variant="contained">
            <ArrowBackIosIcon sx={{ width: "1vw", height: "2.5vh" }} />
            <Typography
              sx={{ fontWeight: "bold", fontSize: "0.75vw" }}
              variant="body2"
            >
              CONTINUAR COMPRANDO
            </Typography>
          </Button>
        </Link>
      </Box>

      <Box component="section" sx={styles.cartContainer}>
        <Box>
          <List sx={styles.cart}>
            <ListItem sx={styles.item}>
              <Typography variant="body2" sx={styles.product}>
                PRODUTO
              </Typography>
              <ListItemIcon sx={styles.clear} onClick={handleClearCart}>
                <CancelIcon sx={{ width: "1.5vw", height: "2.5vh" }} />
                Limpar Carrinho
              </ListItemIcon>
            </ListItem>
            <Divider />
            {cart.map((item) => (
              <CartItem
                key={item._id}
                name={item.name}
                backgroundImage={item.background_image}
                price={item.price}
                id={item._id}
                removeProduct={() => handleDeleteProduct(item._id)}
              />
            ))}
            <Divider />
            <ListItem sx={styles.item}>
              <Typography variant="body2" sx={styles.product}>
                SUBTOTAL
              </Typography>
              <Typography variant="body2" sx={styles.subtotal}>
                $ {subtotal.toFixed(2)}
              </Typography>
            </ListItem>
          </List>
          <Box component="section" sx={styles.info}>
            <Typography variant="body2" sx={styles.info.title}>
              INFORMAÇÕES IMPORTANTES
            </Typography>
            <List sx={styles.cart}>
              <ListItem>
                • Esta aplicação foi desenvolvida apenas para fins de estudo e
                prática.
              </ListItem>
              <ListItem>
                • As formas de pagamento funcionam somente como uma ilustração
                de um sistema de e-commerce.
              </ListItem>
              <ListItem>
                • Ao clickar em &quot;Finalizar&quot;, nenhum dado pessoal é
                capturado pela aplicação.
              </ListItem>
            </List>
          </Box>
        </Box>
        <PaymentMethods total={`$ ${subtotal.toFixed(2)}`} />
      </Box>
    </Box>
  );
}
