import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // ✅ correct CSS import

/* ===== LOAD SAVED THEME BEFORE APP RENDERS ===== */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
