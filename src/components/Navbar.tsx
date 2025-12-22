import { useState, useEffect } from "react";

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
    // { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#clients", label: "Clients" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-5 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-secondary">
            <span className="text-white font-display text-xl font-semibold">S</span>
          </div>
          <span className="font-display text-2xl font-semibold text-primary">
            SignWorld
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium tracking-wide text-text-muted hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
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
        <div className="container py-8 flex flex-col gap-6 bg-surface border-t border-border">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-display text-primary hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn mt-4 w-fit"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
