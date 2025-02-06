//import Navbar from "../Navbar/Navbar";
//import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import styles from "./styles.js";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function Layout({ cartSize }) {
  const path = useLocation().pathname;

  return (
    <>
      <Header cartSize={cartSize} isCart={path} />
      <Box sx={styles.outlet}>
        <Outlet />
      </Box>
    </>
  );
}

Layout.propTypes = {
  cartSize: PropTypes.number,
};
