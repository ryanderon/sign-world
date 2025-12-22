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

  return (
    <div className="bg-primary text-white">
      {/* Contact CTA Section */}
      <div className="container py-20 md:py-32 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-6">
              Let's Work Together
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-medium mb-6">
              Ready to bring your{" "}
              <span className="italic text-secondary">vision to life?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              If you think something isn't possible due to time, budget, size, 
              material or finish — let us see what we can do.
            </p>
          </div>
          <div className="md:text-right">
            <a
              href="mailto:hello@signworld.io"
              className="inline-block font-display text-3xl md:text-4xl hover:text-secondary transition-colors duration-300 mb-4"
            >
              hello@signworld.io
            </a>
            <p className="text-white/60">
              or call us at{" "}
              <a
                href="tel:+621234567890"
                className="text-white hover:text-secondary transition-colors"
              >
                (021) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                <span className="font-display text-xl font-semibold">S</span>
              </div>
              <span className="font-display text-2xl font-semibold">SignWorld</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Since 2011, we have strived to offer high quality printed products 
              in the marketplace. Your trusted partner for all printing needs.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-6">
              Products
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {currentYear} SignWorld. All rights reserved.</p>
          <p className="text-white/30">
            Trusted by 100+ brands since 2011
          </p>
        </div>
      </div>
    </div>
  );
}
