import logo from "../assets/logo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Offset Printing", href: "#services" },
      { label: "Digital Printing", href: "#services" },
      { label: "Signage", href: "#services" },
      { label: "Merchandise", href: "#services" },
    ],
    products: [
      { label: "Neon Box", href: "#products" },
      { label: "LED Lightbox", href: "#products" },
      { label: "Letter Signs", href: "#products" },
      { label: "Vehicle Wraps", href: "#products" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Clients", href: "#clients" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { 
      label: "Instagram", 
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      label: "WhatsApp", 
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    { 
      label: "LinkedIn", 
      href: "#", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="relative bg-surface">
      {/* Top gradient line */}
      <div className="h-1 gradient-bg" />
      
      {/* Contact CTA Section */}
      <div className="container py-20 md:py-28 border-b border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-subheading mb-6">
              Let's Work Together
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
              Ready to bring your{" "}
              <span className="gradient-text">vision to life?</span>
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              If you think something isn't possible due to time, budget, size, 
              material or finish — let us see what we can do.
            </p>
          </div>
          <div className="md:text-right">
            <a
              href="mailto:hello@signworld.io"
              className="inline-block font-display text-2xl md:text-3xl font-bold text-text hover:text-cyan transition-colors duration-300 mb-4"
            >
              hello@signworld.io
            </a>
            <p className="text-text-muted">
              or call us at{" "}
              <a
                href="tel:+621234567890"
                className="text-text hover:text-magenta transition-colors font-medium"
              >
                (021) 123-4567
              </a>
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center text-text-muted hover:text-cyan hover:bg-surface-elevated transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img src={logo} alt="Sign World" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display text-xl font-bold gradient-text block">SignWorld</span>
                <span className="text-xs text-text-muted tracking-wider uppercase">Digital Printing</span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Since 2011, we have strived to offer high quality printed products 
              in the marketplace. Your trusted partner for all printing needs.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-text mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-text mb-6">
              Products
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-magenta transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-text mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-orange transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-sm">
            © {currentYear} SignWorld. All rights reserved.
          </p>
          <p className="text-text-dim text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Trusted by 100+ brands since 2011
          </p>
        </div>
      </div>
    </div>
  );
}
