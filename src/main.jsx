import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Route";
import ContextApi from "./component/ContextApi/ContextApi";

createRoot(document.getElementById("root")).render(
  <ContextApi>
    <RouterProvider router={router} />
  </ContextApi>,
);
