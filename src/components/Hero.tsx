import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const rotatingWords = [
  "signage",
  "offset printing",
  "digital printing",
  "merchandise",
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=400&h=500&fit=crop",
    alt: "Signage",
    label: "Signage",
  },
  {
    src: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=400&h=500&fit=crop",
    alt: "Offset Printing",
    label: "Offset",
  },
  {
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=500&fit=crop",
    alt: "Digital Printing",
    label: "Digital",
  },
  {
    src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=500&fit=crop",
    alt: "Merchandise",
    label: "Merch",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    alt: "LED Signage",
    label: "LED",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const rotatingRef = useRef<HTMLSpanElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Initial page load animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Text animations
    tl.fromTo(
      titleRef.current.querySelectorAll(".word"),
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

    // Images animate at the same time as text (starting at 0)
    tl.fromTo(
      imagesRef.current.querySelectorAll(".hero-image"),
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15 },
      0 // Start at the beginning of the timeline
    );
  }, []);

  // Rotating text animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      gsap.to(rotatingRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
          // Reset position for animate in
          gsap.set(rotatingRef.current, { y: 20 });
          // Animate in
          gsap.to(rotatingRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-subheading mb-8">Since 2011</p>

            {/* Main headline */}
            <h1 ref={titleRef} className="text-display mb-8">
              <span className="word inline-block">Your</span>{" "}
              <span className="word inline-block">trusted</span>{" "}
              <span className="word inline-block">partner</span>{" "}
              <span className="word inline-block">for high quality</span>
              <br />
              <span
                ref={rotatingRef}
                className="word inline-block overflow-hidden text-secondary italic mt-4"
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-body-lg max-w-2xl mb-12">
              We understand every project is different. Deadlines can be tight.
              Colours need to match. The world of printing can be confusing —
              but we can help.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn">
                Start Your Project
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div ref={imagesRef} className="relative hidden lg:block">
            <div className="grid grid-cols-12 gap-3 h-[500px]">
              {/* Main large image */}
              <div className="hero-image col-span-5 row-span-2 relative group overflow-hidden">
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-widest opacity-70">
                    Featured
                  </p>
                  <p className="font-display text-2xl font-medium">
                    {heroImages[0].label}
                  </p>
                </div>
              </div>

              {/* Top right images */}
              <div className="hero-image col-span-4 relative group overflow-hidden">
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-display text-lg">
                  {heroImages[1].label}
                </p>
              </div>

              <div className="hero-image col-span-3 relative group overflow-hidden">
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-display text-lg">
                  {heroImages[2].label}
                </p>
              </div>

              {/* Bottom right images */}
              <div className="hero-image col-span-3 relative group overflow-hidden">
                <img
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-display text-lg">
                  {heroImages[3].label}
                </p>
              </div>

              <div className="hero-image col-span-4 relative group overflow-hidden">
                <img
                  src={heroImages[4].src}
                  alt={heroImages[4].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-display text-lg">
                  {heroImages[4].label}
                </p>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 z-10">
              <p className="font-display text-4xl font-medium">13+</p>
              <p className="text-sm text-white/80">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
          {[
            { number: "13+", label: "Years Experience" },
            { number: "100+", label: "Trusted Clients" },
            { number: "4", label: "Core Services" },
            { number: "∞", label: "Possibilities" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="font-display text-4xl md:text-5xl font-medium text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-text-muted tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
