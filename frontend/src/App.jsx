import React from "react";

/**
 * Root application component rendering a simple layout to demonstrate the monochrome theme.
 * Kept minimal; the theme tokens are defined in src/styles/theme.css and applied via index.css.
 */
// PUBLIC_INTERFACE
export default function App() {
  /** Root application component. */
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
