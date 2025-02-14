import { lazy } from "react";

import Home from "./pages/Home/Home.jsx";
const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage.jsx"));

export const appRoutes = [
  {
    path: "/:page?",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/products/:gameTitle",
    component: ProductPage,
  },
  {
    path: "/search/:searchTerm/:page",
    component: SearchPage,
  },
];
