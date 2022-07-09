import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/Home";

const MemoHeader = React.memo(Header);
const MemoFooter = React.memo(Footer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoHeader />
    <Home />
    <MemoFooter />
  </React.StrictMode>
);
