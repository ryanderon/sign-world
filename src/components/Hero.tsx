import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ArrowRightIcon } from "./ui";
import { importImages } from "../helper";

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
      aria-label={t("hero.badge")}
    >
      <div className="aurora-bg">
        <div className="aurora-orb-1" />
        <div className="aurora-orb-2" />
        <div className="aurora-orb-3" />
        <div className="aurora-orb-4" />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative container pt-24 pb-20 md:pt-30 md:pb-28 min-h-screen">
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
              <span className="word block text-gradient">
                {t("hero.title2")}
              </span>
            </h1>

            <p ref={subtitleRef} className="text-body-lg max-w-lg mb-8">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-2 mb-10 sm:hidden">
              {services.map((service) => (
                <span key={service} className="badge-outline">
                  {service}
                </span>
              ))}
            </div>

            <div ref={ctaRef} className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn px-[24px] py-[16px]">
                  {t("hero.startProject")}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
                <a href="#services" className="btn-outline">
                  {t("hero.exploreServices")}
                </a>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-medium text-text-muted mr-1">
                  {t("hero.alsoExplore")}
                </span>
                <Link
                  to="/printing"
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-orange/30 hover:border-orange/50 hover:bg-white transition-all duration-300 text-sm"
                >
                  <svg
                    className="w-4 h-4 text-orange shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                    />
                  </svg>
                  <span className="font-medium text-primary">Printing</span>
                  <ArrowRightIcon className="w-3 h-3 text-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  to="/merchandise"
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-purple/30 hover:border-purple/50 hover:bg-white transition-all duration-300 text-sm w-[134px]"
                >
                  <svg
                    className="w-4 h-4 text-purple shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="font-medium text-primary">
                    {t("hero.merchandiseLink")}
                  </span>
                  <ArrowRightIcon className="w-3 h-3 text-purple opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  to="/printing-installation"
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-green/30 hover:border-green/50 hover:bg-white transition-all duration-300 text-sm"
                >
                  <svg
                    className="w-4 h-4 text-green shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>

                  <span className="font-medium text-primary">
                    {t("printingInstallation.sectionTitle")}
                  </span>
                  <ArrowRightIcon className="w-3 h-3 text-green opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="block">
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
              <div className="hero-img col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={importImages("signage", "42.jpeg")}
                  alt="Professional Signage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={importImages("signage", "1.jpeg")}
                  alt="Building Signage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="col-span-5 row-span-3 hero-img lg:col-span-4 lg:row-span-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={importImages("signage", "46.jpeg")}
                  alt="Office Branding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="hidden lg:flex hero-img col-span-3 row-span-2 rounded-2xl gradient-teal-blue p-4 flex-col justify-center items-center text-white shadow-lg">
                <p className="font-display text-3xl font-bold">1000+</p>
                <p className="text-sm text-white/80 text-center">
                  {t("hero.projectsDone")}
                </p>
              </div>

              <div className="col-span-7 row-span-2 hero-img lg:col-span-5 lg:row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={importImages("signage", "3.jpeg")}
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
                <span
                  key={brand}
                  className="font-display font-bold text-base text-text-dim hover:text-primary transition-colors cursor-default"
                >
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
