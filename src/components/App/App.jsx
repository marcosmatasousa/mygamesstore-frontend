import Header from "../Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { appRoutes } from "../../routes.js";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

import { getCartSizeAPI, addToCartAPI } from "../../utils/utils.js";

import { CircularProgress } from "@mui/material";

export default function App() {
  const [cartSize, setCartSize] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    async function getCartSize() {
      try {
        const data = await getCartSizeAPI();
        setCartSize(data.items);
      } catch (error) {
        console.log(error);
      }
    }

    getCartSize();
  }, [cartSize]);

  async function addToCart(productId) {
    try {
      await addToCartAPI(productId);
      setCartSize((prevSize) => prevSize + 1);
      setIsAlertOpen(true);
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  }

  // const routes = useMemo(() => {
  //   return createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Layout cartSize={cartSize} />,
  //       children: [
  //         { path: "/", element: <Navigate to="/1" /> },
  //         {
  //           path: "search/:searchTerm/:pageNumber",
  //           element: <SearchPage addToCart={addToCart} />,
  //         },
  //         { path: ":pageNumber", element: <Home addToCart={addToCart} /> },
  //         { path: "products/:gameTitle", element: <ProductPage /> },
  //         { path: "/cart", element: <Cart /> },
  //       ],
  //     },
  //   ]);
  // }, [cartSize]);

  const routes = appRoutes.map((route) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<route.component cartSize={cartSize} addToCart={addToCart} />}
      />
    );
  });

  return (
    <Box>
      {isAlertOpen && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={isAlertOpen}
          autoHideDuration={5000}
          message="Note archived"
        >
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Product added to your cart!
          </Alert>
        </Snackbar>
      )}
      <Header cartSize={cartSize} />
      <Suspense fallback={() => <CircularProgress />}>
        <Routes>{routes}</Routes>
      </Suspense>
    </Box>
  );
}
