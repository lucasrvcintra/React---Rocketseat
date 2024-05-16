import React from "react";
import ReactDOM from "react-dom/client";

import "./Styles/global.css";

import { Home } from "./Pages/Home/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
