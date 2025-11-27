import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// PUBLIC_INTERFACE
export function App() {
  /** Root application component rendering a simple layout to demonstrate the monochrome theme. */
  return (
    <div className="app-root">
      <header className="header" style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 700, color: "var(--color-text-strong)" }}>Recipe Explorer</div>
        <div className="search" style={{ marginLeft: "auto", width: "100%", maxWidth: 520 }}>
          <input type="search" placeholder="Search recipes..." aria-label="Search recipes" />
        </div>
      </header>

      <main className="main-content">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="card" role="article" style={{ padding: 12 }}>
              <div style={{ height: 120, background: "#fff", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)" }} />
              <h3 style={{ margin: "12px 0 4px 0", color: "var(--color-text)" }}>Recipe {i + 1}</h3>
              <p className="text-muted" style={{ margin: 0 }}>A delicious monochrome styled recipe.</p>
              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                <button className="button">View</button>
                <button className="button ghost" type="button">Details</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

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
