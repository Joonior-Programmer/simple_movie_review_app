import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import Home from "./routes/Home";

const MemoHeader = React.memo(Header);
const MemoFooter = React.memo(Footer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <MemoHeader />
      <Home />
      <MemoFooter />
    </div>
  </React.StrictMode>
);
