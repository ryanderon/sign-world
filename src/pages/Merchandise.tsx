import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";
import { useSEO } from "../hooks/useSEO";
import StructuredData from "../components/StructuredData";
import {
  SectionHeader,
  GradientIcon,
  ArrowRightIcon,
  CheckIcon,
} from "../components/ui";
import MoreServices from "../components/MoreServices";
import { getImageList, importImages } from "../helper";

const merchandiseCategories = [
  {
    id: "apparel",
    translationKey: "apparel",
    image:
      importImages("merchandise", "5.jpeg"),
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
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
  {
    id: "promotional",
    translationKey: "promotional",
    image:
        importImages("merchandise", "1.jpeg"),
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
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    id: "corporate",
    translationKey: "corporate",
    image:
      importImages("merchandise", "3.jpeg"),
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
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    id: "packaging",
    translationKey: "packaging",
    image:
      importImages("merchandise", "14.jpeg"),
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
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
];

const merchandiseHeroImages = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=500&fit=crop",
];

const popularProducts = [
  {
    name: "T-Shirts",
    image:
      importImages("merchandise", "5.jpeg"),
  },
  {
    name: "Bags",
    image:
      importImages("merchandise", "2.jpeg"),
  },
  {
    name: "Mugs",
    image:
      importImages("merchandise", "7.jpeg"),
  },
  {
    name: "Tumbler",
    image:
      importImages("merchandise", "12.jpeg"),
  },
  {
    name: "Flash Drives",
    image:
      importImages("merchandise", "8.jpeg"),
  },
  {
    name: "Keychains",
    image:
        importImages("merchandise", "6.jpeg"),
  },
];

export default function Merchandise() {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null!);

  const merchandise = getImageList("merchandise");
  useGsapFadeIn(ref);

  useSEO({
    title: i18n.language === "id"
      ? "Custom Merchandise & Promotional Items | SignWorld"
      : "Custom Merchandise & Promotional Items | SignWorld",
    description: i18n.language === "id"
      ? t("merchandise.description")
      : t("merchandise.description"),
    keywords: i18n.language === "id"
      ? "custom merchandise, kaos custom, tote bag custom, mug custom, corporate gift, promotional items, merchandise jakarta"
      : "custom merchandise, custom t-shirts, custom bags, custom mugs, corporate gifts, promotional items, merchandise jakarta",
    canonical: typeof window !== "undefined" ? `${window.location.origin}/merchandise` : "",
  });

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
      <StructuredData type="BreadcrumbList" />
      <section role="main" aria-label={t("merchandise.sectionTitle")}>
        <div className="aurora-bg">
          <div className="aurora-orb-1" />
          <div className="aurora-orb-2" />
          <div className="aurora-orb-3" />
          <div className="aurora-orb-4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-pink/5" />
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
                {t("merchandise.backToHome")}
              </Link>

              <span className="text-subheading mb-4 block">
                {t("merchandise.sectionTitle")}
              </span>
              <h1 ref={titleRef} className="text-display mb-6 text-primary">
                <span className="word block">{t("merchandise.heading")}</span>
                <span className="word block text-gradient">
                  {t("merchandise.headingHighlight")}
                </span>
              </h1>
              <p ref={subtitleRef} className="text-body-lg max-w-lg mb-8">
                {t("merchandise.description")}
              </p>

              <div ref={ctaRef} className="flex flex-wrap gap-4">
                <a href="#categories" className="btn">
                  {t("merchandise.exploreProducts")}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
                <a href="#contact" className="btn-outline">
                  {t("merchandise.getQuote")}
                </a>
              </div>
            </div>

            <div ref={imageRef} className="hidden lg:block">
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                <div className="hero-img col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("merchandise", "1.jpeg")}
                    alt="Custom Apparel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("merchandise", "11.png")}
                    alt="Custom Mugs"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="hero-img col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("merchandise", "8.jpeg")}
                    alt="Promotional Items"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div
                  className="hero-img col-span-3 row-span-2 rounded-2xl p-4 flex flex-col justify-center items-center text-white shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  }}
                >
                  <p className="font-display text-3xl font-bold">300+</p>
                  <p className="text-sm text-white/80 text-center">
                    Custom Items
                  </p>
                </div>

                <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("merchandise", "5.jpeg")}
                    alt="Corporate Gifts"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <SectionHeader
            subheading={t("merchandise.popular.sectionTitle")}
            heading={
              <>
                {t("merchandise.popular.heading")}{" "}
                <span className="text-gradient-warm">
                  {t("merchandise.popular.headingHighlight")}
                </span>
              </>
            }
            description={t("merchandise.popular.description")}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularProducts.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-semibold text-sm">
                    {product.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 md:py-28">
        <div className="container">
          <SectionHeader
            subheading={t("merchandise.categories.sectionTitle")}
            heading={
              <>
                {t("merchandise.categories.heading")}{" "}
                <span className="text-gradient">
                  {t("merchandise.categories.headingHighlight")}
                </span>
              </>
            }
            description={t("merchandise.categories.description")}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {merchandiseCategories.map((category) => (
              <article
                key={category.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={category.image}
                      alt={t(
                        `merchandise.categories.items.${category.translationKey}.title`
                      )}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  </div>

                  <div className="p-6 flex flex-col justify-center">
                    <GradientIcon variant="purple-pink" className="mb-4">
                      {category.icon}
                    </GradientIcon>

                    <h3 className="font-display text-xl font-bold text-primary mb-2">
                      {t(
                        `merchandise.categories.items.${category.translationKey}.title`
                      )}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 leading-relaxed">
                      {t(
                        `merchandise.categories.items.${category.translationKey}.desc`
                      )}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {(
                        t(
                          `merchandise.categories.items.${category.translationKey}.features`,
                          { returnObjects: true }
                        ) as string[]
                      ).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-text-muted"
                        >
                          <CheckIcon className="w-4 h-4 text-purple" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple hover:text-pink transition-colors"
                    >
                      {t("merchandise.learnMore")}
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={importImages("merchandise", "7.jpeg")}
                      alt="Custom Mug"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={importImages("merchandise", "5.jpeg")}
                      alt="Custom T-Shirt"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={importImages("merchandise", "6.jpeg")}
                      alt="Custom Keychain"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={importImages("merchandise", "11.png")}
                      alt="Custom Doll"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-subheading mb-4 block">
                {t("merchandise.whyUs.sectionTitle")}
              </span>
              <h2 className="text-heading text-primary mb-6">
                {t("merchandise.whyUs.heading")}{" "}
                <span className="text-gradient">
                  {t("merchandise.whyUs.headingHighlight")}
                </span>
              </h2>
              <p className="text-body-lg mb-8">
                {t("merchandise.whyUs.description")}
              </p>

              <div className="space-y-4">
                {[
                  "customDesign",
                  "qualityPrint",
                  "bulkPricing",
                  "fastDelivery",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                      }}
                    >
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm mb-0.5">
                        {t(`merchandise.whyUs.features.${key}.title`)}
                      </h4>
                      <p className="text-xs text-text-muted">
                        {t(`merchandise.whyUs.features.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreServices currentPage="merchandise" />

      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
            }}
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("merchandise.cta.title")}
                </h3>
                <p className="text-white/80 text-lg">
                  {t("merchandise.cta.description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href="https://wa.me/6282121755446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  {t("merchandise.cta.whatsapp")}
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors"
                >
                  {t("merchandise.cta.backToSignage")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
