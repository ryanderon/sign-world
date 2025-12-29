import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";
import {
  SectionHeader,
  GradientIcon,
  ArrowRightIcon,
  CheckIcon,
} from "../components/ui";
import MoreServices from "../components/MoreServices";

const printingCategories = [
  {
    id: "digital",
    translationKey: "digital",
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc1d67?w=600&h=400&fit=crop",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    id: "offset",
    translationKey: "offset",
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&h=400&fit=crop",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
  },
  {
    id: "installation",
    translationKey: "installation",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
];

const printingHeroImages = [
  "https://images.unsplash.com/photo-1562654501-a0ccc0fc1d67?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=500&fit=crop",
];

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=300&fit=crop",
    alt: "Offset Printing",
  },
  {
    src: "https://images.unsplash.com/photo-1562654501-a0ccc0fc1d67?w=400&h=300&fit=crop",
    alt: "Digital Printing",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    alt: "Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    alt: "Large Format",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    alt: "Vehicle Wrap",
  },
  {
    src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
    alt: "Banner Print",
  },
];

export default function Printing() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current?.querySelectorAll(".word"),
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
    <div ref={ref} className="relative">
      <section>
        <div className="aurora-bg">
          <div className="aurora-orb-1" />
          <div className="aurora-orb-2" />
          <div className="aurora-orb-3" />
          <div className="aurora-orb-4" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-pink/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative container pt-24 pb-20 md:pt-30 md:pb-28 h-screen">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
            <div className="max-w-xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                {t("printing.backToHome")}
              </Link>

              <span className="text-subheading mb-4 block">
                {t("printing.sectionTitle")}
              </span>
              <h1 ref={titleRef} className="text-display mb-6 text-primary">
                <span className="word block">{t("printing.heading")}</span>
                <span className="word block text-gradient-warm">
                  {t("printing.headingHighlight")}
                </span>
              </h1>
              <p ref={subtitleRef} className="text-body-lg max-w-lg mb-8">
                {t("printing.description")}
              </p>

              <div ref={ctaRef} className="flex flex-wrap gap-4">
                <a href="#categories" className="btn">
                  {t("printing.exploreServices")}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
                <a href="#contact" className="btn-outline">
                  {t("printing.getQuote")}
                </a>
              </div>
            </div>

            <div ref={imageRef} className="hidden lg:block">
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                <div className="hero-img col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={printingHeroImages[0]}
                    alt="Digital Printing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={printingHeroImages[3]}
                    alt="Large Format Printing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="hero-img col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={printingHeroImages[1]}
                    alt="Offset Printing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div
                  className="hero-img col-span-3 row-span-2 rounded-2xl p-4 flex flex-col justify-center items-center text-white shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
                  }}
                >
                  <p className="font-display text-3xl font-bold">500+</p>
                  <p className="text-sm text-white/80 text-center">
                    Print Jobs
                  </p>
                </div>

                <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={printingHeroImages[2]}
                    alt="Installation Service"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 md:py-28 bg-surface">
        <div className="container">
          <SectionHeader
            subheading={t("printing.categories.sectionTitle")}
            heading={
              <>
                {t("printing.categories.heading")}{" "}
                <span className="text-gradient">
                  {t("printing.categories.headingHighlight")}
                </span>
              </>
            }
            description={t("printing.categories.description")}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {printingCategories.map((category) => (
              <article
                key={category.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(
                      `printing.categories.items.${category.translationKey}.title`
                    )}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <GradientIcon variant="orange-pink">
                      {category.icon}
                    </GradientIcon>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary mb-2">
                    {t(
                      `printing.categories.items.${category.translationKey}.title`
                    )}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">
                    {t(
                      `printing.categories.items.${category.translationKey}.desc`
                    )}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {(
                      t(
                        `printing.categories.items.${category.translationKey}.features`,
                        { returnObjects: true }
                      ) as string[]
                    ).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <CheckIcon className="w-4 h-4 text-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-pink transition-colors"
                  >
                    {t("printing.learnMore")}
                    <ArrowRightIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-subheading mb-4 block">
                {t("printing.whyUs.sectionTitle")}
              </span>
              <h2 className="text-heading text-primary mb-6">
                {t("printing.whyUs.heading")}{" "}
                <span className="text-gradient-warm">
                  {t("printing.whyUs.headingHighlight")}
                </span>
              </h2>
              <p className="text-body-lg mb-8">
                {t("printing.whyUs.description")}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "fastTurnaround",
                  "colorAccuracy",
                  "ecoFriendly",
                  "noMinimum",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-start gap-3 p-4 bg-surface rounded-xl"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
                      }}
                    >
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm mb-0.5">
                        {t(`printing.whyUs.features.${key}.title`)}
                      </h4>
                      <p className="text-xs text-text-muted">
                        {t(`printing.whyUs.features.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-lg ${
                    index === 0 ? "col-span-2 row-span-2" : ""
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
          </div>
        </div>
      </section>

      <MoreServices currentPage="printing" />

      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
            }}
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("printing.cta.title")}
                </h3>
                <p className="text-white/80 text-lg">
                  {t("printing.cta.description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href="https://wa.me/6282200000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  {t("printing.cta.whatsapp")}
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors"
                >
                  {t("printing.cta.backToSignage")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
