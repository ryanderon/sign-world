import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import { GlobeIcon, PhoneIcon, ArrowRightIcon } from "./ui";

const navLinks = [
  { href: "#home", labelKey: "navbar.home" },
  { href: "#services", labelKey: "navbar.services" },
  { href: "#portfolio", labelKey: "navbar.portfolio" },
  { href: "#products", labelKey: "navbar.products" },
  { href: "#clients", labelKey: "navbar.clients" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container py-4 flex justify-between items-center">
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

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors duration-300"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors rounded-lg hover:bg-surface"
            >
              <GlobeIcon className="w-4 h-4" />
              <span className="uppercase">{i18n.language}</span>
            </button>

            <a 
              href="tel:+6282200000000" 
              className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>+62 822-0000-0000</span>
            </a>
            <a href="#contact" className="btn">
              {t("navbar.freeConsultation")}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
          </div>

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
                {t(link.labelKey)}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-base font-medium text-text-muted hover:text-primary py-3 px-4 rounded-lg hover:bg-surface transition-all duration-300"
            >
              <GlobeIcon className="w-5 h-5" />
              {i18n.language === "id" ? "English" : "Bahasa Indonesia"}
            </button>

            <div className="pt-4 mt-2 border-t border-border space-y-3">
              <a href="tel:+6282200000000" className="flex items-center gap-3 text-text-muted px-4 py-2">
                <PhoneIcon className="w-5 h-5" />
                +62 822-0000-0000
              </a>
              <a
                href="#contact"
                className="btn w-full text-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                {t("navbar.consultNow")}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
