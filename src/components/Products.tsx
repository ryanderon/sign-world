import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const products = [
  {
    category: "Signage",
    title: "Neon Box, Billboard & Letter Signs",
    desc: "Production & installation services with a wide range of materials: stainless steel, galvanil, brass, bronze, copper, acrylic, aluminum, and wood.",
    featured: true,
    color: "cyan",
    images: [
      { src: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=800&fit=crop", alt: "Neon Box" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=800&fit=crop", alt: "Billboard" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop", alt: "Letter Sign" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop", alt: "Building Sign" },
    ],
  },
  {
    category: "LED Display",
    title: "Slim LED Box & Lightbox Fabric",
    desc: "Ultra-thin at 1.5cm with neutral density light. Knitted 100% polyester fabric, wrinkle-resistant. Perfect for retail POP, banners, and backdrops.",
    color: "magenta",
    images: [
      { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=800&fit=crop", alt: "Slim LED Box" },
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop", alt: "Lightbox Fabric" },
      { src: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=800&fit=crop", alt: "LED Display" },
      { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&fit=crop", alt: "Retail LED" },
    ],
  },
  {
    category: "Wrapping",
    title: "Vehicle & Building Wrap",
    desc: "From coffee machines to vehicles to entire buildings. Cutting sticker, vinyl, sunblast, one-way, and flexy materials available.",
    color: "orange",
    images: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop", alt: "Building Wrap" },
      { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=800&fit=crop", alt: "Vehicle Wrap" },
      { src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop", alt: "Bus Wrap" },
      { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=800&fit=crop", alt: "Car Wrap" },
    ],
  },
];

const ledFeatures = [
  { title: "Equitable Light", desc: "Even bright light with no shadows", icon: "💡" },
  { title: "Easy Installation", desc: "Four-sided flip-flop frame system", icon: "🔧" },
  { title: "No Heat", desc: "Surface stays cool — no cooling required", icon: "❄️" },
  { title: "Ultra Thin", desc: "Down to 1.5cm for modern aesthetics", icon: "📐" },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div className="relative" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[200px]" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-subheading mb-6">Our Products</p>
            <h2 className="text-heading text-text">
              Quality solutions for{" "}
              <span className="gradient-text">every space</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline w-fit">
            <span>Request Catalog</span>
          </a>
        </div>

        {/* Products by Category */}
        <div className="space-y-12">
          {products.map((product) => (
            <article
              key={product.category}
              className={`group relative rounded-3xl overflow-hidden ${
                product.featured
                  ? ""
                  : ""
              }`}
            >
              {/* Card with gradient effect */}
              <div 
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  background: `linear-gradient(135deg, var(--color-${product.color})/10%, transparent)`,
                }}
              />
              
              <div className={`relative bg-surface border border-border rounded-3xl overflow-hidden group-hover:border-border-light transition-colors duration-300 ${
                product.featured ? "ring-1 ring-cyan/20" : ""
              }`}>
                {/* Featured Badge */}
                {product.featured && (
                  <div 
                    className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-4 py-2 rounded-full text-background z-10"
                    style={{
                      background: `linear-gradient(135deg, var(--color-${product.color}), var(--color-blue))`,
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold tracking-wider uppercase">Our Specialty</span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Category Header */}
                  <div className="mb-6">
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: `var(--color-${product.color})` }}
                    >
                      {product.category}
                    </span>
                    <h3
                      className={`font-display font-bold text-text mt-2 mb-3 ${
                        product.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={`text-text-muted leading-relaxed ${
                        product.featured ? "max-w-3xl text-base" : "max-w-2xl text-sm"
                      }`}
                    >
                      {product.desc}
                    </p>
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative rounded-xl overflow-hidden cursor-pointer group/img ${
                          product.featured
                            ? "aspect-[3/4]"
                            : "aspect-[3/4]"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        
                        {/* Hover overlay */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, var(--color-${product.color})/30%, transparent)`,
                          }}
                        />
                        
                        {/* Label */}
                        <div className="absolute bottom-3 left-3">
                          <span className="text-xs font-medium text-text bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
                            {image.alt}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured CTA */}
                  {product.featured && (
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a href="#contact" className="btn">
                        <span>Get a Quote for Signage</span>
                      </a>
                      <span className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="text-yellow">★</span>
                        Most requested by our clients
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* LED Features Section */}
        <div className="mt-20 pt-16">
          <div className="relative rounded-3xl overflow-hidden bg-surface border border-border">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 via-transparent to-cyan/10" />
            <div className="absolute inset-0 bg-grid opacity-30" />

            <div className="relative grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center">
              <div>
                <p className="text-subheading mb-4">Why Slim LED Box?</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-text mb-6">
                  Technology for{" "}
                  <span className="gradient-text">maximum impact</span>
                </h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Suitable for marketing tools and any variety of applications in public 
                  areas: airports, malls, retail stores, bus stations, restaurants, banks, 
                  hotels, cinemas, offices, schools, museums, and more.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {ledFeatures.map((feature) => (
                    <div key={feature.title} className="p-4 rounded-xl bg-surface-alt/50 border border-border hover:border-magenta/30 transition-colors duration-300">
                      <span className="text-2xl mb-2 block">{feature.icon}</span>
                      <h4 className="font-semibold text-text mb-1 text-sm">{feature.title}</h4>
                      <p className="text-xs text-text-muted">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-surface-alt rounded-2xl p-8 md:p-12 border border-border text-center">
                  <p className="font-display text-7xl md:text-8xl font-bold gradient-text mb-4">1.5cm</p>
                  <p className="text-lg text-text font-semibold mb-2">Ultra Thin Profile</p>
                  <p className="text-text-muted text-sm">
                    Slim enough to display just about anywhere, making it incredibly easy 
                    to integrate into any layout while giving a modern look.
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-magenta/20 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-cyan/20 rounded-xl rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-text-muted max-w-md">
            Need custom materials or special finishes? We create tailored solutions 
            for your specific requirements.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-cyan hover:text-magenta transition-colors duration-300"
          >
            Request Custom Quote
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
