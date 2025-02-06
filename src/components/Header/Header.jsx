import { Box, AppBar, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import "./Header.css";
import styles from "./styles.js";
import PropTypes from "prop-types";

export default function Header({ cartSize, isCart }) {
  return (
    <AppBar sx={styles.appbar}>
      <Box sx={styles.container}>
        <Link to="/">
          <Box sx={styles.cartAvatar}>
            <SportsEsportsIcon sx={{ height: "3vw", width: "4vh" }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "1.3vw" }}
            >
              MyGameStore
            </Typography>
          </Box>
        </Link>
        <Box sx={styles.cartAvatar}>
          {isCart !== "/cart" && (
            <Link to="/cart">
              <IconButton>
                <Badge
                  horizontal="right"
                  vertical="bottom"
                  color="error"
                  badgeContent={cartSize}
                >
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Link>
          )}
          <IconButton>
            <PersonIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number,
  isCart: PropTypes.string,
};
