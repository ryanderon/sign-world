import { useRef, useState } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

// Image Marquee Component
function ImageMarquee({ images, direction = "left" }: { images: string[]; direction?: "left" | "right" }) {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];
  
  return (
    <div 
      className="overflow-hidden"
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
            className="shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden bg-surface-alt"
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
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    gallery: [
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=150&fit=crop",
    ],
  },
  {
    id: "offset",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    ),
    title: "Offset Printing",
    tagline: "Large Quantity Excellence",
    desc: "Best cost-effective solution for large quantities with complete color control using the Pantone Matching System. Professional support for any type of marketing tools and business promotional medium.",
    features: [
      "Brochures & Catalogs",
      "Business Cards & Stationery",
      "Premium Packaging",
      "Marketing Collateral",
      "Annual Reports",
      "Promotional Flyers",
    ],
    stats: { value: "500K+", label: "Prints Delivered" },
    image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=600&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1568205631163-5c9c295bcf49?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=200&h=150&fit=crop",
    ],
  },
  {
    id: "digital",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=150&fit=crop",
    ],
  },
  {
    id: "merchandise",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=150&fit=crop",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We discuss your project requirements, timeline, and budget to understand your vision completely.",
  },
  {
    step: "02",
    title: "Design & Proof",
    desc: "Our team creates detailed proofs for your approval, ensuring perfect color matching and specifications.",
  },
  {
    step: "03",
    title: "Production",
    desc: "State-of-the-art equipment and skilled craftsmen bring your project to life with precision.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Quality checked and delivered on time, with installation services available for signage projects.",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "We understand deadlines are critical. Our track record speaks for itself.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Pantone Matching",
    desc: "Complete color control with professional Pantone Matching System.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "Quality Assured",
    desc: "Every project undergoes rigorous quality checks before delivery.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Expert Team",
    desc: "13+ years of industry experience at your service.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <div className="container">
        <div className="relative bg-primary text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative px-8 py-8 md:px-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-semibold tracking-widest uppercase">
                    Our Services
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
          Complete printing solutions,{" "}
          <span className="italic text-secondary">one partner</span>
        </h2>

                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                  From offset printing to digital, signage to merchandise — we
                  handle every aspect of your printing needs with expertise and
                  care. Your vision, professionally executed.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn bg-secondary hover:bg-white hover:text-primary">
                    Start Your Project
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
                  >
                    See Our Process
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className={`p-6 md:p-8 ${
                      stat.highlight
                        ? "bg-secondary text-white"
                        : "bg-white/5 backdrop-blur-sm border border-white/10"
                    }`}
                  >
                    <p className="font-display text-4xl md:text-5xl font-medium mb-2">
                      {stat.value}
                    </p>
                    <p className={stat.highlight ? "text-white/80" : "text-white/60"}>
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
      <div className="container py-16 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
        {services.map((service) => (
            <article
              key={service.id}
              className={`group relative overflow-hidden transition-all duration-500 ${
              service.featured
                  ? "md:col-span-2 bg-linear-to-br from-secondary/5 via-background to-secondary/10 ring-2 ring-secondary/30"
                  : "bg-surface border border-border hover:border-secondary/50"
            }`}
          >
            {service.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-2 text-xs font-bold tracking-widest uppercase flex items-center gap-2 z-10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Specialty
              </div>
            )}

              <div className={`grid ${service.featured ? "lg:grid-cols-5" : "md:grid-cols-3"} h-full`}>
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden ${
                    service.featured ? "lg:col-span-2 aspect-4/3 lg:aspect-auto" : "aspect-square md:aspect-auto"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Floating Stat */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3">
                    <p className="font-display text-3xl font-medium text-secondary">
                      {service.stats.value}
                    </p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      {service.stats.label}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-6 lg:p-8 ${service.featured ? "lg:col-span-3" : "md:col-span-2"}`}>
                  <div className={`flex items-start justify-between ${service.featured ? "mb-6" : "mb-4"}`}>
                    <div
                      className={`p-3 ${
                        service.featured ? "bg-secondary text-white" : "bg-surface-alt text-secondary"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                      {service.tagline}
              </span>
                  </div>

              <h3
                    className={`font-display font-medium text-primary transition-colors duration-300 ${
                  service.featured
                        ? "text-3xl md:text-4xl mb-4"
                        : "text-xl md:text-2xl mb-2 group-hover:text-secondary"
                }`}
              >
                {service.title}
              </h3>

                  <p className={`text-text-muted leading-relaxed ${service.featured ? "mb-6" : "mb-4 text-sm line-clamp-2"}`}>
                {service.desc}
              </p>

                  {/* Features Grid */}
                  <div className={`grid ${service.featured ? "grid-cols-2 md:grid-cols-3 gap-3 mb-6" : "grid-cols-2 gap-2 mb-4"}`}>
                    {(service.featured ? service.features : service.features.slice(0, 4)).map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg
                          className={`w-4 h-4 shrink-0 ${
                            service.featured ? "text-secondary" : "text-accent"
                          }`}
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
                    className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link ${
                      service.featured
                        ? "text-secondary hover:gap-3"
                        : "text-primary hover:text-secondary hover:gap-3"
                    }`}
                  >
                    Get a Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                  {/* Image Gallery Marquee */}
                  {service.gallery && (
                    <div className={`border-t border-border space-y-2 ${service.featured ? "mt-8 pt-6" : "mt-4 pt-4"}`}>
                      <p className="text-xs text-text-muted uppercase tracking-widest mb-3">
                        Project Gallery
                      </p>
                      <ImageMarquee images={service.gallery} direction="left" />
                      <ImageMarquee images={service.gallery.slice().reverse()} direction="right" />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-surface-alt border-y border-border">
        <div className="container py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="text-subheading mb-4">Why Choose Us</p>
            <h3 className="text-heading max-w-2xl mx-auto">
              The <span className="italic text-secondary">SignWorld</span> difference
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-background p-8 border border-border hover:border-secondary transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-display text-xl font-medium text-primary mb-3">
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
            <h3 className="text-heading mb-6">
              From concept to{" "}
              <span className="italic text-secondary">completion</span>
            </h3>
            <p className="text-body-lg mb-8">
              We've refined our process over 13 years to ensure every project
              runs smoothly, on time, and exceeds expectations.
            </p>

            <div className="space-y-0">
              {processSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="group relative pl-8 pb-8 border-l-2 border-border last:border-transparent hover:border-secondary transition-colors duration-300"
                >
                  {/* Step Number */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-background border-2 border-border group-hover:border-secondary group-hover:bg-secondary flex items-center justify-center text-xs font-bold text-text-muted group-hover:text-white transition-all duration-300">
                    {item.step}
                  </div>

                  <div className="pl-4">
                    <h4 className="font-display text-xl font-medium text-primary mb-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector Line Animation */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-0 top-8 bottom-0 w-0.5 -translate-x-1/2 bg-secondary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square bg-primary relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center text-white p-12">
                <div className="text-center">
                  <p className="font-display text-7xl md:text-8xl font-medium mb-4">
                    13<span className="text-secondary">+</span>
                  </p>
                  <p className="text-lg tracking-widest uppercase opacity-70">
                    Years of Excellence
                  </p>
                  <div className="w-16 h-0.5 bg-secondary mx-auto mt-6" />
                  <p className="mt-6 text-white/60 text-sm max-w-xs mx-auto">
                    Over a decade of delivering premium printing solutions to
                    businesses across industries
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-8 max-w-xs">
              <p className="text-3xl font-display font-medium mb-2">100%</p>
              <p className="text-sm text-white/80">
                Client satisfaction commitment on every project we undertake
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container pb-8">
        <div className="relative bg-linear-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 11px)`,
              }}
            />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-xs font-semibold tracking-widest uppercase">
                Ready to Start?
              </span>
            </div>

            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-3xl mx-auto">
              Have a unique project{" "}
              <span className="italic text-secondary">in mind?</span>
        </h3>

            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Projects can have small budgets but need big results. Our team is
              ready to discuss your vision and find the perfect solution within
              your timeline and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-semibold tracking-wider uppercase bg-secondary text-white hover:bg-white hover:text-primary transition-all duration-300"
                style={{ letterSpacing: "0.15em" }}
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+621234567890"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-wider uppercase bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
          style={{ letterSpacing: "0.15em" }}
        >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
