import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#services", label: "Layanan" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#products", label: "Produk" },
    { href: "#clients", label: "Klien" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <nav
        className={`transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="container py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-2 ring-border transition-all duration-300 group-hover:ring-accent">
              <img src={logo} alt="SignWorld" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-primary leading-tight tracking-tight">
                SIGNWORLD
              </span>
              <span className="text-[9px] text-text-muted tracking-[0.12em] uppercase font-medium">
                Signage & Branding
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+6282261617724" 
              className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+62 822-6161-7724</span>
            </a>
            <a href="#contact" className="btn">
              Konsultasi Gratis
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                isOpen 
                  ? "rotate-45 translate-y-2 bg-accent" 
                  : "bg-primary"
              }`}
            />
            <span
              className={`w-5 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${
                isOpen 
                  ? "-rotate-45 -translate-y-2 bg-accent" 
                  : "bg-primary"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="container py-4 flex flex-col gap-1 bg-white border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-text-muted hover:text-primary py-3 px-4 rounded-lg hover:bg-surface transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border space-y-3">
              <a href="tel:+6282261617724" className="flex items-center gap-3 text-text-muted px-4 py-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 822-6161-7724
              </a>
              <a
                href="#contact"
                className="btn w-full text-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
