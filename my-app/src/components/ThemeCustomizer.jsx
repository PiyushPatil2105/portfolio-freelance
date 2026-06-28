import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import "./ThemeCustomizer.css";

const themes = [
  { name: "Indigo", h: "263", s: "90%", l: "60%", hex: "#8b5cf6" },
  { name: "Cyan", h: "188", s: "86%", l: "53%", hex: "#06b6d4" },
  { name: "Emerald", h: "142", s: "71%", l: "45%", hex: "#10b981" },
  { name: "Rose", h: "340", s: "82%", l: "59%", hex: "#f43f5e" },
  { name: "Amber", h: "38", s: "92%", l: "50%", hex: "#f59e0b" },
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Indigo");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedThemeName = localStorage.getItem("portfolio-theme") || "Indigo";
    const selected = themes.find((t) => t.name === savedThemeName) || themes[0];
    applyTheme(selected);
  }, []);

  const applyTheme = (theme) => {
    setActiveTheme(theme.name);
    localStorage.setItem("portfolio-theme", theme.name);

    // Apply HSL values to root CSS variables
    document.documentElement.style.setProperty("--primary-h", theme.h);
    document.documentElement.style.setProperty("--primary-s", theme.s);
    document.documentElement.style.setProperty("--primary-l", theme.l);
  };

  return (
    <div className="theme-customizer">
      <div
        className={`theme-panel ${isOpen ? "visible" : "hidden"}`}
        aria-label="Theme selection panel"
      >
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`theme-dot ${activeTheme === theme.name ? "active" : ""}`}
            style={{
              backgroundColor: theme.hex,
              "--dot-color": theme.hex,
            }}
            onClick={() => applyTheme(theme)}
            title={`Switch to ${theme.name} theme`}
            aria-label={`Switch to ${theme.name} theme`}
          />
        ))}
      </div>

      <button
        className={`theme-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Theme Color"
        aria-expanded={isOpen}
        aria-label="Toggle theme selection panel"
      >
        <FiSettings size={20} />
      </button>
    </div>
  );
}
