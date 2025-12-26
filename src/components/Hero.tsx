import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ArrowRightIcon } from "./ui";

const heroImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop",
];

const trustedBrands = ["BCA", "AEON", "Unilever", "KFC", "Huawei"];

export default function Hero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null!);

  const services = [
    t("hero.services.customSignage"),
    t("hero.services.3dLettering"),
    t("hero.services.ledNeonBox"),
    t("hero.services.visualBranding"),
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current.querySelectorAll(".word"),
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        imageRef.current?.querySelectorAll(".hero-img"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-x-clip"
    >
      <div className="aurora-bg">
        <div className="aurora-orb-1" />
        <div className="aurora-orb-2" />
        <div className="aurora-orb-3" />
        <div className="aurora-orb-4" />
      </div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative container pt-32 pb-20 md:pt-40 md:pb-28 h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full mb-8 border border-teal/30 shadow-sm">
              <div className="pulse-indicator" />
              <span className="text-xs font-semibold text-teal uppercase tracking-wide">
                {t("hero.badge")}
              </span>
            </div>

            <h1 ref={titleRef} className="text-display mb-6 text-primary">
              <span className="word block">{t("hero.title1")}</span>
              <span className="word block text-gradient">{t("hero.title2")}</span>
            </h1>

            <p ref={subtitleRef} className="text-body-lg max-w-lg mb-8">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {services.map((service) => (
                <span key={service} className="badge-outline">
                  {service}
                </span>
              ))}
            </div>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn">
                {t("hero.startProject")}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
              <a href="#services" className="btn-outline">
                {t("hero.exploreServices")}
              </a>
            </div>
          </div>

          <div ref={imageRef} className="hidden lg:block">
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
              <div className="hero-img col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={heroImages[0]}
                  alt="Professional Signage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={heroImages[3]}
                  alt="Building Signage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="hero-img col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={heroImages[1]}
                  alt="Office Branding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="hero-img col-span-3 row-span-2 rounded-2xl gradient-teal-blue p-4 flex flex-col justify-center items-center text-white shadow-lg">
                <p className="font-display text-3xl font-bold">1000+</p>
                <p className="text-sm text-white/80 text-center">{t("hero.projectsDone")}</p>
              </div>
              
              <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={heroImages[2]}
                  alt="Reception Branding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/30 bg-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-text-muted font-medium">
              {t("hero.trustedBy")}
            </p>
            <div className="flex items-center gap-8 md:gap-12">
              {trustedBrands.map((brand) => (
                <span key={brand} className="font-display font-bold text-base text-text-dim hover:text-primary transition-colors cursor-default">
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
