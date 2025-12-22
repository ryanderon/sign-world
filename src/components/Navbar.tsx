import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#clients", label: "Clients" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img src={logo} alt="Sign World" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold gradient-text leading-tight">
              SignWorld
            </span>
            <span className="text-[10px] text-text-muted tracking-wider uppercase">
              Digital Printing
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-5 py-2 text-sm font-medium text-text-muted hover:text-text transition-colors duration-300 group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 bg-surface-alt rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
          <a href="#contact" className="btn ml-4">
            <span>Get Quote</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isOpen 
                ? "rotate-45 translate-y-2 bg-cyan" 
                : "bg-text"
            }`}
          />
          <span
            className={`w-6 h-0.5 rounded-full bg-text transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isOpen 
                ? "-rotate-45 -translate-y-2 bg-magenta" 
                : "bg-text"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container py-8 flex flex-col gap-2 bg-surface border-t border-border">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-2xl font-display font-semibold text-text-muted hover:text-text py-3 px-4 rounded-xl hover:bg-surface-alt transition-all duration-300"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">{link.label}</span>
              <span 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-full transition-all duration-300"
                style={{
                  background: `linear-gradient(180deg, var(--color-cyan), var(--color-magenta))`,
                }}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="btn mt-4 w-full text-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <span>Get Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
