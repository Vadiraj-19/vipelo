import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // nice icons
import logo from "../assets/logo.png";   // black logo
import logo2 from "../assets/logo2.png"; // white logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/95 shadow-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={scrolled ? logo : logo2}
            alt="VipeLo logo"
            className="h-9 w-auto transition-all duration-500"
          />
          <span
            className={`text-lg font-serif tracking-[0.35em] transition-colors duration-500 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            VIPELO
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          className={`hidden md:flex items-center gap-10 text-sm font-medium transition-colors duration-500 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {["Home", "About", "Products", "Contact"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col gap-6 px-8 py-6 transition-colors ${
            scrolled ? "bg-white/95 text-gray-900" : "bg-black/90 text-white"
          }`}
        >
          {["Home", "About", "Products", "Contact"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              onClick={() => setMenuOpen(false)} // close menu on click
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
