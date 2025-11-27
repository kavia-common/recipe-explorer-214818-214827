import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/theme.css";
import App from "./App.jsx";

// Accessibility helper: show focus only on keyboard navigation
document.addEventListener("mousedown", () => document.body.classList.add("using-mouse"));
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") document.body.classList.remove("using-mouse");
});

// Log selected env info (non-sensitive) to ease debugging in preview; respects REACT_APP_* naming
if (import.meta && import.meta.env) {
  // Only log minimal non-sensitive info
  // eslint-disable-next-line no-console
  console.log("Frontend starting on port:", import.meta.env.REACT_APP_PORT || 3000);
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
