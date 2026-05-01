import { useState, useEffect } from "react";
import "./navbar.scss";

const navLinks = [
  { name: "Home", href: "#home" },
  // { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;

      setIsScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbarProgress">
        <div className="navbarProgressFill" style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="navInner">
        <a href="#home" className="brand">
          JULIA<span>KOBZAR</span>
        </a>

        <div className="desktopLinks">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navLink">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
