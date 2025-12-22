import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const products = [
  {
    category: "Signage",
    title: "Neon Box, Billboard & Letter Signs",
    desc: "Production & installation services with a wide range of materials: stainless steel, galvanil, brass, bronze, copper, acrylic, aluminum, and wood.",
    featured: true,
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
    images: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop", alt: "Building Wrap" },
      { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=800&fit=crop", alt: "Vehicle Wrap" },
      { src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop", alt: "Bus Wrap" },
      { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=800&fit=crop", alt: "Car Wrap" },
    ],
  },
];

const ledFeatures = [
  { title: "Equitable Light Distribution", desc: "Even bright light with no shadows or bright spots" },
  { title: "Easy Installation", desc: "Four-sided flip-flop frame system for easy image changes" },
  { title: "No Heat", desc: "Surface stays cool — no cooling required" },
  { title: "Ultra Thin", desc: "Down to 1.5cm thickness for a modern look" },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div className="container" ref={ref}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
        <div className="max-w-2xl">
          <p className="text-subheading mb-6">Our Products</p>
          <h2 className="text-heading">
            Quality solutions for{" "}
            <span className="italic text-secondary">every space</span>
          </h2>
        </div>
        <a href="#contact" className="btn-outline w-fit">
          Request Catalog
        </a>
      </div>

      {/* Products by Category */}
      <div className="space-y-20">
        {products.map((product) => (
          <article
            key={product.category}
            className={`group ${
              product.featured
                ? "relative -mx-4 md:-mx-8 px-4 md:px-8 py-12 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 border-y border-secondary/20"
                : ""
            }`}
          >
            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-4 right-4 md:right-8 flex items-center gap-2 bg-secondary text-white px-4 py-2 text-xs font-semibold tracking-widest uppercase">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Specialty
              </div>
            )}

            {/* Category Header */}
            <div className="mb-8">
              <span
                className={`text-xs font-semibold tracking-widest uppercase ${
                  product.featured ? "text-secondary" : "text-secondary"
                }`}
              >
                {product.category}
              </span>
              <h3
                className={`font-display font-medium text-primary mt-2 mb-3 ${
                  product.featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                }`}
              >
                {product.title}
              </h3>
              <p
                className={`text-text-muted leading-relaxed ${
                  product.featured ? "max-w-3xl text-lg" : "max-w-2xl"
                }`}
              >
                {product.desc}
              </p>
            </div>

            {/* Images Grid */}
            <div
              className={`grid gap-4 ${
                product.featured
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`img-reveal bg-surface-alt overflow-hidden cursor-pointer ${
                    product.featured
                      ? "aspect-3/4 ring-2 ring-secondary/20 hover:ring-secondary/50 transition-all duration-300"
                      : "aspect-3/4"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Featured CTA */}
            {product.featured && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn">
                  Get a Quote for Signage
                </a>
                <span className="text-sm text-text-muted">
                  ★ Most requested by our clients
                </span>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* LED Features Section */}
      <div className="mt-20 pt-16 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-subheading mb-4">Why Slim LED Box?</p>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-primary mb-6">
              Technology for{" "}
              <span className="italic text-secondary">maximum impact</span>
            </h3>
            <p className="text-text-muted mb-8">
              Suitable for marketing tools and any variety of applications in public 
              areas: airports, malls, retail stores, bus stations, restaurants, banks, 
              hotels, cinemas, offices, schools, museums, and more.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {ledFeatures.map((feature) => (
                <div key={feature.title}>
                  <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                  <p className="text-sm text-text-muted">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-alt p-8 md:p-12 border border-border">
            <p className="text-6xl md:text-8xl font-display font-light text-border mb-4">1.5cm</p>
            <p className="text-lg text-primary font-medium mb-2">Ultra Thin Profile</p>
            <p className="text-text-muted">
              Slim enough to display just about anywhere, making it incredibly easy 
              to integrate into any layout while giving a modern look.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-text-muted max-w-md">
          Need custom materials or special finishes? We create tailored solutions 
          for your specific requirements.
        </p>
        <a
          href="#contact"
          className="link-underline text-primary font-medium flex items-center gap-2 group"
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
  );
}
