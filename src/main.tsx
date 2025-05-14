import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./Global.css";
import Home from "./Home";
import Store from "./Store";
import Cart from "./Cart";
import Search from "./Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Store",
    element: <Store />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
