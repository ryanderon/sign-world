import logo from "../assets/logo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Custom Signage", href: "#services" },
      { label: "3D Lettering", href: "#services" },
      { label: "Acrylic Signage", href: "#services" },
      { label: "LED Neon Box", href: "#services" },
      { label: "Visual Branding", href: "#services" },
    ],
    products: [
      { label: "Premium Materials", href: "#products" },
      { label: "Ready-Made Signs", href: "#products" },
      { label: "LED Solutions", href: "#products" },
      { label: "Acrylic Displays", href: "#products" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#clients" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { 
      label: "Instagram", 
      href: "https://instagram.com/signworld.id", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      label: "TikTok", 
      href: "https://tiktok.com/@signworld.id", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    },
    { 
      label: "LinkedIn", 
      href: "https://linkedin.com/company/signworld", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="relative bg-white">
      {/* Contact CTA Section */}
      <div id="contact" className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-subheading mb-4 block">Get in Touch</span>
              <h2 className="text-heading text-primary mb-6">
                Let's <span className="text-gradient-warm">create</span> together.
              </h2>
              <p className="text-text-muted text-lg max-w-md mb-8">
                Ready to transform your space? Our team is here to help 
                bring your vision to life.
              </p>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "✓", text: "Free Consultation" },
                  { icon: "✓", text: "Fast Response" },
                  { icon: "✓", text: "Competitive Pricing" },
                  { icon: "✓", text: "Quality Guaranteed" },
                ].map((item, index) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-text-muted">
                    <span 
                      className="w-5 h-5 rounded-full text-white text-xs flex items-center justify-center"
                      style={{ 
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)'
                          : 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'
                      }}
                    >
                      {item.icon}
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/6282261617724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(21,128,61,0.08) 100%)' }}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted">WhatsApp</p>
                    <p className="font-display font-bold text-lg text-primary group-hover:text-green-600 transition-colors">
                      +62 822-6161-7724
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-text-dim group-hover:text-green-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="mailto:hello@signworld.id"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(236,72,153,0.08) 100%)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="font-display font-bold text-lg text-primary group-hover:text-pink transition-colors">
                      hello@signworld.id
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-text-dim group-hover:text-pink transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <div 
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,180,180,0.08) 0%, rgba(59,130,246,0.08) 100%)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)' }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Location</p>
                    <p className="font-medium text-primary text-sm">
                      Jl. Raya Signage No. 123<br />
                      Jakarta Selatan, 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-border">
                  <img src={logo} alt="SignWorld" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-display text-lg font-bold text-primary block">SIGNWORLD</span>
                  <span className="text-[10px] text-text-muted tracking-wider uppercase">Signage & Branding</span>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
                Your trusted partner for premium signage and visual 
                branding solutions. Serving all of Indonesia.
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-white transition-all duration-300"
                    style={{ 
                      ['--hover-bg' as string]: index === 0 
                        ? 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'
                        : index === 1
                        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                        : 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = e.currentTarget.style.getPropertyValue('--hover-bg')}
                    onMouseLeave={(e) => e.currentTarget.style.background = ''}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="md:col-span-3">
              <h4 className="font-display font-semibold text-sm text-primary mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-teal transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div className="md:col-span-2">
              <h4 className="font-display font-semibold text-sm text-primary mb-4">
                Products
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-teal transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:col-span-3">
              <h4 className="font-display font-semibold text-sm text-primary mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-teal transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-dim text-sm">
              © {currentYear} SignWorld. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-text-dim">
              <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
