import React from "react";
import ReactDOM from "react-dom/client";
import "./app.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = ReactDOM.createRoot(document.querySelector(".app"));
app.render(<React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</React.StrictMode>);

