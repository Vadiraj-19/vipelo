import { useState, useEffect } from "react";
import logo from "../assets/logo.png";   // black logo
import logo2 from "../assets/logo2.png"; // white logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
            src={scrolled ? logo : logo2} // switch based on scroll
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

        {/* Nav Links */}
        <div
          className={`flex items-center gap-10 text-sm font-medium transition-colors duration-500 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {["Home", "About Us", "Products", "Contact Us"].map((link, i) => (
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
      </nav>
    </header>
  );
};

export default Navbar;
