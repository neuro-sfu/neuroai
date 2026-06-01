import { useState } from "react";
import { navItems } from "../content/siteContent";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#main-content" aria-label="SFU Neuro+AI home">
          <span className="brand-title">SFU Neuro+AI</span>
          <span className="brand-subtitle">Bridging Brain Imaging and Artificial Intelligence</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="site-navigation"
          className={isOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-small" href="#get-involved" onClick={() => setIsOpen(false)}>
            Get Involved
          </a>
        </nav>
      </div>
    </header>
  );
}
