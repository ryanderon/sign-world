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
    color: "cyan",
  },
  {
    src: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=400&h=500&fit=crop",
    alt: "Offset Printing",
    label: "Offset",
    color: "blue",
  },
  {
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=500&fit=crop",
    alt: "Digital Printing",
    label: "Digital",
    color: "magenta",
  },
  {
    src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=500&fit=crop",
    alt: "Merchandise",
    label: "Merch",
    color: "orange",
  },
];

const stats = [
  { number: "13+", label: "Years", suffix: "Experience" },
  { number: "100+", label: "Happy", suffix: "Clients" },
  { number: "4", label: "Core", suffix: "Services" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const rotatingRef = useRef<HTMLSpanElement>(null!);
  const imagesRef = useRef<HTMLDivElement>(null!);
  const statsRef = useRef<HTMLDivElement>(null!);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Initial page load animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Text animations
    tl.fromTo(
      titleRef.current.querySelectorAll(".word"),
      { y: 100, opacity: 0, rotateX: -45 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.08 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        statsRef.current?.querySelectorAll(".stat-item"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.3"
      );

    // Images animate in with stagger
    tl.fromTo(
      imagesRef.current.querySelectorAll(".hero-image"),
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.12 },
      0.3
    );
  }, []);

  // Rotating text animation
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(rotatingRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
          gsap.set(rotatingRef.current, { y: 30 });
          gsap.to(rotatingRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-magenta/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt/80 backdrop-blur-sm rounded-full border border-border mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-text-muted">
                Established Since 2011
              </span>
            </div>

            {/* Main headline */}
            <h1 ref={titleRef} className="text-display mb-8" style={{ perspective: '1000px' }}>
              <span className="word inline-block text-text">Your trusted</span>{" "}
              <span className="word inline-block text-text">partner for</span>
              <br />
              <span className="word inline-block text-text">high quality</span>
              <br />
              <span
                ref={rotatingRef}
                className="word inline-block gradient-text mt-2"
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-body-lg max-w-xl mb-10">
              We understand every project is different. Deadlines can be tight.
              Colours need to match. The world of printing can be confusing —
              <span className="text-cyan"> but we can help.</span>
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn">
                <span>Start Your Project</span>
              </a>
              <a href="#services" className="btn-outline">
                <span>Explore Services</span>
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex gap-8 mt-14 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text-alt">
                    {stat.number}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    <span className="text-text">{stat.label}</span> {stat.suffix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Gallery */}
          <div ref={imagesRef} className="relative hidden lg:block">
            <div className="relative h-[550px]">
              {/* Floating images with different positions */}
              {heroImages.map((image, index) => {
                const positions = [
                  { top: '0%', left: '5%', rotate: '-3deg', zIndex: 4 },
                  { top: '10%', left: '45%', rotate: '2deg', zIndex: 3 },
                  { top: '35%', left: '0%', rotate: '4deg', zIndex: 2 },
                  { top: '40%', left: '50%', rotate: '-2deg', zIndex: 1 },
                ];
                const pos = positions[index];
                
                return (
                  <div
                    key={image.label}
                    className={`hero-image absolute w-48 h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:z-10`}
                    style={{
                      top: pos.top,
                      left: pos.left,
                      transform: `rotate(${pos.rotate})`,
                      zIndex: pos.zIndex,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    
                    {/* Label */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div 
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold`}
                        style={{
                          background: `linear-gradient(135deg, var(--color-${image.color})/80%, var(--color-${image.color})/40%)`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        {image.label}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div 
                      className="absolute -inset-1 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                      style={{
                        background: `var(--color-${image.color})`,
                      }}
                    />
                  </div>
                );
              })}

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 border border-border rounded-2xl opacity-30" />
              <div className="absolute top-20 right-10 w-16 h-16 border border-cyan/30 rounded-full" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 right-20 bg-surface border border-border rounded-2xl p-4 shadow-2xl shadow-cyan/10 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="font-display text-3xl font-bold gradient-text">∞</p>
                <p className="text-xs text-text-muted">Possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
