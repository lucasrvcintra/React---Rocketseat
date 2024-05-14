import React from "react";
import ReactDOM from "react-dom/client";

import "./Styles/global.css";
import "./Styles/style.css";

import Home from "./Pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
