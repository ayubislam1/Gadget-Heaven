import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async"; // Updated import

import Navbar from "./Components/Navbar";
import App from "./App";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Allproduct from "./Components/Allproduct";
import ProductDetails from "./Components/ProductDetails";
import Statistics from "./Components/Statistics";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import ALLcatagories from "./Components/ALLcatagories";
import Chart from "./Components/Chart";
import Error from "./Components/Error";
import Offer from "./Components/Offer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>Home | Gadget Heaven</title>
            </Helmet>
            <Home />
          </>
        ),
        loader: () => fetch("/data.json"), // Updated path
      },
      {
        path: "/product/:product_id",
        element: (
          <>
            <Helmet>
              <title>Product Details | Gadget Heaven</title>
            </Helmet>
            <ProductDetails />
          </>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/dashboard",
        element: (
          <>
            <Helmet>
              <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <Dashboard />
          </>
        ),
        loader: async () => fetch("/data.json"),
      },
      {
        path: "/offer",
        element: (
          <>
            <Helmet>
              <title>Offers | Gadget Heaven</title>
            </Helmet>
            <Offer />
          </>
        ),
      },
      {
        path: "/product",
        element: (
          <>
            <Helmet>
              <title>All Products | Gadget Heaven</title>
            </Helmet>
            <Allproduct />
          </>
        ),
      },
      {
        path: "/statistics",
        element: (
          <>
            <Helmet>
              <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <Statistics />
          </>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/cart",
        element: (
          <>
            <Helmet>
              <title>Cart | Gadget Heaven</title>
            </Helmet>
            <Cart />
          </>
        ),
        loader: async () => fetch("/data.json"),
      },
      {
        path: "/wishlist",
        element: (
          <>
            <Helmet>
              <title>Wishlist | Gadget Heaven</title>
            </Helmet>
            <Wishlist />
          </>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/catagories",
        element: (
          <>
            <Helmet>
              <title>Categories | Gadget Heaven</title>
            </Helmet>
            <ALLcatagories />
          </>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/chart",
        element: (
          <>
            <Helmet>
              <title>Charts | Gadget Heaven</title>
            </Helmet>
            <Chart />
          </>
        ),
        loader: async () => fetch("/data.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
