import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Manage scrolling state for styling shrinks
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up IntersectionObserver to update active section
  useEffect(() => {
    const sections = ["about", "services", "skills", "projects", "certificates", "faq", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // triggers near the center of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const activeLabel = navLinks.find(
            (link) => link.href === `#${id}`
          )?.label;
          if (activeLabel) setActiveSection(activeLabel);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    // Handle home section manually based on top scroll
    const handleHomeScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("Home");
      }
    };
    window.addEventListener("scroll", handleHomeScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleHomeScroll);
    };
  }, []);

  const handleLinkClick = (label) => {
    setActiveSection(label);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a href="#" className="logo" onClick={() => handleLinkClick("Home")}>
        Piyush<span>.</span>
      </a>

      {/* Hamburger icon for mobile viewports */}
      <button
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`nav-link ${activeSection === link.label ? "active" : ""}`}
            onClick={() => handleLinkClick(link.label)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
