import { useRef, useState } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

// Image Marquee Component
function ImageMarquee({ images, direction = "left" }: { images: string[]; direction?: "left" | "right" }) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedImages = [...images, ...images];
  
  return (
    <div 
      className="overflow-hidden rounded-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`flex gap-2 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ 
          animationPlayState: isPaused ? "paused" : "running",
          width: "fit-content"
        }}
      >
        {duplicatedImages.map((img, index) => (
          <div 
            key={index} 
            className="shrink-0 w-20 h-14 md:w-28 md:h-18 overflow-hidden rounded-lg bg-surface-alt"
          >
            <img 
              src={img} 
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    id: "signage",
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-4h12l2 4" />
        <path d="M9 10v6M15 10v6M9 13h6" />
      </svg>
    ),
    title: "Signage",
    tagline: "Production & Installation",
    desc: "Complete signage solutions from production to installation. We offer neon boxes, billboard signs, letter signs in various materials, slim LED boxes, and fabric lightboxes.",
    features: [
      "Neon Box Signs",
      "Billboard & Pylons",
      "3D Letter Signs",
      "LED Lightbox",
      "Directory Signs",
      "Wayfinding Systems",
    ],
    stats: { value: "#1", label: "Requested Service" },
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=800&fit=crop",
    featured: true,
    color: "cyan",
    gallery: [
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=200&h=150&fit=crop",
    ],
  },
  {
    id: "offset",
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    ),
    title: "Offset Printing",
    tagline: "Large Quantity Excellence",
    desc: "Best cost-effective solution for large quantities with complete color control using the Pantone Matching System. Professional support for any type of marketing tools.",
    features: [
      "Brochures & Catalogs",
      "Business Cards",
      "Premium Packaging",
      "Marketing Collateral",
      "Annual Reports",
      "Promotional Flyers",
    ],
    stats: { value: "500K+", label: "Prints Delivered" },
    image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=600&h=800&fit=crop",
    color: "blue",
    gallery: [
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&h=150&fit=crop",
    ],
  },
  {
    id: "digital",
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Digital Printing",
    tagline: "Small to Large Format",
    desc: "Supporting any type of business promotional medium from posters to building wraps. Available for any size — from coffee machines to vehicles to entire buildings.",
    features: [
      "Posters & Banners",
      "X-Banner & Roll Up",
      "Vehicle Wrapping",
      "Building Wraps",
      "Vinyl Graphics",
      "Trade Show Displays",
    ],
    stats: { value: "∞", label: "Size Possibilities" },
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=800&fit=crop",
    color: "magenta",
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=150&fit=crop",
    ],
  },
  {
    id: "merchandise",
    icon: (
      <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    title: "Merchandise",
    tagline: "Standard to Customized",
    desc: "All your marketing tools and promotional items at competitive prices. From standard items to unusual custom marketing tools — if you can imagine it, we can make it.",
    features: [
      "Pens & Writing Tools",
      "Mugs & Drinkware",
      "Bags & Totes",
      "USB & Tech Items",
      "Apparel & Wearables",
      "Custom Creations",
    ],
    stats: { value: "1000+", label: "Product Options" },
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=800&fit=crop",
    color: "orange",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=200&h=150&fit=crop",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We discuss your project requirements, timeline, and budget to understand your vision completely.",
    icon: "💬",
  },
  {
    step: "02",
    title: "Design & Proof",
    desc: "Our team creates detailed proofs for your approval, ensuring perfect color matching.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Production",
    desc: "State-of-the-art equipment and skilled craftsmen bring your project to life.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Quality checked and delivered on time, with installation services available.",
    icon: "🚀",
  },
];

const whyChooseUs = [
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    desc: "We understand deadlines are critical. Our track record speaks for itself.",
  },
  {
    icon: "🎨",
    title: "Pantone Matching",
    desc: "Complete color control with professional Pantone Matching System.",
  },
  {
    icon: "✓",
    title: "Quality Assured",
    desc: "Every project undergoes rigorous quality checks before delivery.",
  },
  {
    icon: "👥",
    title: "Expert Team",
    desc: "13+ years of industry experience at your service.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div ref={ref} className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-magenta/5 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <div className="container relative">
        <div className="relative rounded-3xl overflow-hidden bg-surface border border-border">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-magenta/10" />

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt/50 backdrop-blur-sm rounded-full border border-border mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                    Our Services
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text">
                  Complete printing solutions,{" "}
                  <span className="gradient-text">one partner</span>
                </h2>

                <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg">
                  From offset printing to digital, signage to merchandise — we
                  handle every aspect of your printing needs with expertise and
                  care. Your vision, professionally executed.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn">
                    <span>Start Your Project</span>
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-cyan font-medium transition-colors group"
                  >
                    See Our Process
                    <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "13+", label: "Years Experience", highlight: true },
                  { value: "100+", label: "Trusted Clients" },
                  { value: "4", label: "Core Services" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      stat.highlight
                        ? "bg-gradient-to-br from-cyan to-blue text-background"
                        : "bg-surface-alt/50 backdrop-blur-sm border border-border"
                    }`}
                  >
                    <p className={`font-display text-4xl md:text-5xl font-bold mb-2 ${
                      stat.highlight ? "" : "gradient-text-alt"
                    }`}>
                      {stat.value}
                    </p>
                    <p className={stat.highlight ? "text-background/80" : "text-text-muted"}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                service.featured
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              {/* Card background with gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                service.featured 
                  ? "opacity-100" 
                  : "opacity-0 group-hover:opacity-100"
              }`}>
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, var(--color-${service.color})/20%, transparent 50%)`,
                  }}
                />
              </div>

              <div className="relative bg-surface border border-border rounded-2xl overflow-hidden group-hover:border-border-light transition-colors duration-300">
                {service.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full z-10"
                    style={{
                      background: `linear-gradient(135deg, var(--color-${service.color}), var(--color-${service.color})/70%)`,
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold tracking-wider uppercase">Our Specialty</span>
                  </div>
                )}

                <div className={`grid ${service.featured ? "lg:grid-cols-5" : "md:grid-cols-3"} h-full`}>
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden w-full ${
                      service.featured 
                        ? "lg:col-span-2 aspect-video sm:aspect-[4/3] lg:aspect-auto max-h-[200px] sm:max-h-[280px] lg:max-h-none" 
                        : "aspect-video sm:aspect-square md:aspect-auto max-h-[180px] sm:max-h-[240px] md:max-h-none"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Floating Stat */}
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-surface/90 backdrop-blur-md rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-4 sm:py-3 border border-border">
                      <p 
                        className="font-display text-lg sm:text-2xl font-bold"
                        style={{ color: `var(--color-${service.color})` }}
                      >
                        {service.stats.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-text-muted">
                        {service.stats.label}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-4 sm:p-6 lg:p-8 ${service.featured ? "lg:col-span-3" : "md:col-span-2"}`}>
                    <div className={`flex items-start justify-between ${service.featured ? "mb-4 sm:mb-6" : "mb-3 sm:mb-4"}`}>
                      <div
                        className="p-2 sm:p-3 rounded-lg sm:rounded-xl"
                        style={{
                          background: `linear-gradient(135deg, var(--color-${service.color})/20%, var(--color-${service.color})/5%)`,
                          color: `var(--color-${service.color})`,
                        }}
                      >
                        {service.icon}
                      </div>
                      <span 
                        className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
                        style={{ color: `var(--color-${service.color})` }}
                      >
                        {service.tagline}
                      </span>
                    </div>

                    <h3
                      className={`font-display font-bold text-text transition-colors duration-300 ${
                        service.featured
                          ? "text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4"
                          : "text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className={`text-text-muted leading-relaxed ${service.featured ? "mb-4 sm:mb-6 text-sm sm:text-base line-clamp-3 sm:line-clamp-none" : "mb-3 sm:mb-4 text-sm line-clamp-2"}`}>
                      {service.desc}
                    </p>

                    {/* Features Grid */}
                    <div className={`grid ${service.featured ? "grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6" : "grid-cols-2 gap-2 mb-3 sm:mb-4"}`}>
                      {service.features.slice(0, service.featured ? 6 : 4).map((feature, idx) => (
                        <div key={feature} className={`flex items-center gap-2 ${service.featured && idx >= 4 ? "hidden md:flex" : ""}`}>
                          <svg
                            className="w-4 h-4 shrink-0"
                            style={{ color: `var(--color-${service.color})` }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link"
                      style={{ color: `var(--color-${service.color})` }}
                    >
                      Get a Quote
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>

                    {/* Image Gallery Marquee - Hidden on mobile for better UX */}
                    {service.gallery && (
                      <div className={`hidden sm:block border-t border-border space-y-2 ${service.featured ? "mt-8 pt-6" : "mt-4 pt-4"}`}>
                        <p className="text-xs text-text-muted uppercase tracking-widest mb-3">
                          Project Gallery
                        </p>
                        <ImageMarquee images={service.gallery} direction="left" />
                        <ImageMarquee images={service.gallery.slice().reverse()} direction="right" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative">
        <div className="absolute inset-0 bg-surface-alt" />
        <div className="container relative py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="text-subheading mb-4">Why Choose Us</p>
            <h3 className="text-heading text-text">
              The <span className="gradient-text">SignWorld</span> difference
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-surface p-8 rounded-2xl border border-border hover:border-cyan/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="font-display text-xl font-bold text-text mb-3">
                  {item.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="container py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-subheading mb-6">Our Process</p>
            <h3 className="text-heading text-text mb-6">
              From concept to{" "}
              <span className="gradient-text">completion</span>
            </h3>
            <p className="text-body-lg mb-10">
              We've refined our process over 13 years to ensure every project
              runs smoothly, on time, and exceeds expectations.
            </p>

            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="group relative flex gap-6 p-6 rounded-2xl bg-surface border border-border hover:border-cyan/30 transition-all duration-300"
                >
                  {/* Step indicator */}
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-surface-alt group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-wider text-cyan">
                        STEP {item.step}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-10 -bottom-6 w-px h-6 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-surface border border-border relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-magenta/10" />
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan/20 rotate-45 rounded-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-magenta/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-border rounded-3xl" />

              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <p className="font-display text-7xl md:text-8xl font-bold mb-4 gradient-text">
                    13+
                  </p>
                  <p className="text-lg tracking-widest uppercase text-text-muted">
                    Years of Excellence
                  </p>
                  <div className="divider mx-auto mt-6" />
                  <p className="mt-6 text-text-dim text-sm max-w-xs mx-auto">
                    Over a decade of delivering premium printing solutions to
                    businesses across industries
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan to-blue text-background p-6 rounded-2xl max-w-xs shadow-2xl shadow-cyan/20">
              <p className="text-3xl font-display font-bold mb-2">100%</p>
              <p className="text-sm text-background/80">
                Client satisfaction commitment on every project we undertake
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container pb-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-surface" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-magenta/10 to-orange/20" />
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt/50 backdrop-blur-sm rounded-full border border-border mb-8">
              <span className="text-lg">🚀</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                Ready to Start?
              </span>
            </div>

            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto text-text">
              Have a unique project{" "}
              <span className="gradient-text">in mind?</span>
            </h3>

            <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
              Projects can have small budgets but need big results. Our team is
              ready to discuss your vision and find the perfect solution within
              your timeline and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn">
                <span>Get a Free Quote</span>
              </a>
              <a
                href="tel:+621234567890"
                className="btn-outline"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Now
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap justify-center gap-8 text-sm text-text-dim">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Quality Guaranteed
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Fast Turnaround
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Competitive Pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
