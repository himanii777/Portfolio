// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        
        {/* LOGO → Go to Home */}
        <div className="navbar__logo" onClick={() => handleNavClick("home")}>
          <span className="navbar__logo-initials">LT</span>
          <span className="navbar__logo-text">Lora The Explorer</span>
        </div>

        {/* NAV LINKS */}
        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>

          <button
            className="navbar__link"
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </button>

          <button
            className="navbar__link"
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </button>

          <button
            className="navbar__link"
            onClick={() => handleNavClick("ml-projects")}
          >
            ML Projects
          </button>

          <button
            className="navbar__link"
            onClick={() => handleNavClick("software-projects")}
          >
            Software Projects
          </button>

          <button
            className="navbar__link"
            onClick={() => handleNavClick("education")}
          >
            Education
          </button>

          <button
            className="navbar__link"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>

        </nav>

        {/* MOBILE BURGER */}
        <button
          className="navbar__burger"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
