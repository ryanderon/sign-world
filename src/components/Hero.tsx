import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const marqueeText = "SIGNWORLD - Signage & Branding";

const heroImages = [
  "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
];

const services = [
  { label: "Custom Signage", icon: "✦" },
  { label: "Huruf Timbul (3D Lettering)", icon: "✦" },
  { label: "Signage Akrilik", icon: "✦" },
  { label: "Visual Branding", icon: "✦" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current.querySelectorAll(".word"),
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        imagesRef.current?.querySelectorAll(".hero-image"),
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="bg-cream"
    >
      {/* Scrolling Marquee Banner */}
      <div className="bg-primary py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-text-light font-display font-bold text-sm tracking-widest">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                Solusi Professional Branding & Signage
              </span>
            </div>

            {/* Main headline */}
            <h1 ref={titleRef} className="text-display mb-8 text-primary">
              <span className="word block">Wujudkan</span>
              <span className="word block">Ide Anda</span>
              <span className="word block text-accent">Menjadi Nyata</span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-body-lg max-w-xl mb-10">
              Kami adalah mitra kreatif Anda dalam signage & visual branding custom. 
              Karya visual yang kuat, estetik, dan berkelas untuk brand Anda.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {services.map((service) => (
                <span
                  key={service.label}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-white border border-border"
                >
                  <span className="text-accent">{service.icon}</span>
                  {service.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn">
                Konsultasikan Sekarang
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#services" className="btn-outline">
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Right: Image Gallery - Clean grid layout */}
          <div ref={imagesRef} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="hero-image col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroImages[0]}
                  alt="Signage Project"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Second image */}
              <div className="hero-image rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImages[1]}
                  alt="LED Display"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Third image with stats overlay */}
              <div className="hero-image rounded-2xl overflow-hidden shadow-lg relative">
                <img
                  src={heroImages[2]}
                  alt="Office Branding"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="font-display text-4xl font-bold">100+</p>
                    <p className="text-sm opacity-80">Brand Terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trusted By Section */}
      <div className="border-t border-border bg-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-text-muted font-medium">
              Dipercaya oleh puluhan brand ternama di Indonesia
            </p>
            <div className="flex items-center gap-8 opacity-60">
              {["BCA", "AEON", "Unilever", "KFC", "Huawei"].map((brand) => (
                <span key={brand} className="font-display font-bold text-lg text-text-muted">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
