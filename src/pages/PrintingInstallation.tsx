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
import { importImages } from "../helper";

const installationTypes = [
  {
    id: "umbul-umbul",
    translationKey: "umbulUmbul",
    image: importImages("installing", "7.jpeg"),
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
          d="M3.75 21h16.5M4.5 3h15m-7.5 18v-9m-9 0h18m-9 0v9"
        />
      </svg>
    ),
  },
  {
    id: "baliho",
    translationKey: "baliho",
    image: importImages("installing", "4.jpeg"),
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
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>
    ),
  },
  {
    id: "billboard",
    translationKey: "billboard",
    image: importImages("installing", "3.jpeg"),
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
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    id: "banner",
    translationKey: "banner",
    image: importImages("installing", "15.jpeg"),
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m-3 .75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    id: "giant-banner",
    translationKey: "giantBanner",
    image: importImages("installing", "5.jpeg"),
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m-3 .75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    id: "sticker",
    translationKey: "sticker",
    image: importImages("wrapping", "image102.jpeg"),
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
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    id: "signage",
    translationKey: "signage",
    image: importImages("signage", "42.jpeg"),
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
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    id: "other",
    translationKey: "other",
    image: importImages("wrapping", "image94.jpeg"),
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
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const portfolioImages = [
  {
    src: importImages("installing", "1.jpeg"),
    alt: "Umbul-umbul Installation",
  },
  {
    src: importImages("installing", "2.jpeg"),
    alt: "Baliho Installation",
  },
  {
    src: importImages("installing", "3.jpeg"),
    alt: "Billboard Installation",
  },
  {
    src: importImages("installing", "4.jpeg"),
    alt: "Banner Installation",
  },
  {
    src: importImages("installing", "5.jpeg"),
    alt: "Giant Banner Installation",
  },
  {
    src: importImages("installing", "6.jpeg"),
    alt: "Sticker Installation",
  },
];

export default function PrintingInstallation() {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const ctaRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  useSEO({
    title: i18n.language === "id"
      ? "Jasa Pemasangan Professional | SignWorld"
      : "Professional Installation Services | SignWorld",
    description: i18n.language === "id"
      ? t("printingInstallation.description")
      : t("printingInstallation.description"),
    keywords: i18n.language === "id"
      ? "jasa pemasangan, pemasangan baliho, pemasangan billboard, pemasangan banner, pemasangan signage, installation jakarta"
      : "installation services, billboard installation, banner installation, signage installation, installation jakarta, installation indonesia",
    canonical: typeof window !== "undefined" ? `${window.location.origin}/printing-installation` : "",
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
      <section role="main" aria-label={t("printingInstallation.sectionTitle")}>
        <div className="aurora-bg">
          <div className="aurora-orb-1" />
          <div className="aurora-orb-2" />
          <div className="aurora-orb-3" />
          <div className="aurora-orb-4" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-teal/5" />
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
                {t("printingInstallation.backToHome")}
              </Link>

              <span className="text-subheading mb-4 block">
                {t("printingInstallation.sectionTitle")}
              </span>
              <h1 ref={titleRef} className="text-display mb-6 text-primary">
                <span className="word block">{t("printingInstallation.heading")}</span>
                <span className="word block text-gradient-warm">
                  {t("printingInstallation.headingHighlight")}
                </span>
              </h1>
              <p ref={subtitleRef} className="text-body-lg max-w-lg mb-8">
                {t("printingInstallation.description")}
              </p>

              <div ref={ctaRef} className="flex flex-wrap gap-4">
                <a href="#categories" className="btn">
                  {t("printingInstallation.exploreServices")}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
                <a href="#contact" className="btn-outline">
                  {t("printingInstallation.getQuote")}
                </a>
              </div>
            </div>

            <div ref={imageRef} className="hidden lg:block">
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                <div className="hero-img col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("installing", "8.jpeg")}
                    alt="Installation Service"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("installing", "3.jpeg")}
                    alt="Professional Installation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="hero-img col-span-4 row-span-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("installing", "10.jpeg")}
                    alt="Installation Team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div
                  className="hero-img col-span-3 row-span-2 rounded-2xl p-4 flex flex-col justify-center items-center text-white shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
                  }}
                >
                  <p className="font-display text-3xl font-bold">100+</p>
                  <p className="text-sm text-white/80 text-center">
                    Installations
                  </p>
                </div>

                <div className="hero-img col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src={importImages("installing", "11.jpeg")}
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
            subheading={t("printingInstallation.categories.sectionTitle")}
            heading={
              <>
                {t("printingInstallation.categories.heading")}{" "}
                <span className="text-gradient">
                  {t("printingInstallation.categories.headingHighlight")}
                </span>
              </>
            }
            description={t("printingInstallation.categories.description")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationTypes.map((type) => (
              <article
                key={type.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={t(
                      `printingInstallation.categories.items.${type.translationKey}.title`
                    )}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <GradientIcon variant="green">
                      {type.icon}
                    </GradientIcon>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary mb-2">
                    {t(
                      `printingInstallation.categories.items.${type.translationKey}.title`
                    )}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">
                    {t(
                      `printingInstallation.categories.items.${type.translationKey}.desc`
                    )}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:text-teal transition-colors"
                  >
                    {t("printingInstallation.learnMore")}
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
                {t("printingInstallation.whyUs.sectionTitle")}
              </span>
              <h2 className="text-heading text-primary mb-6">
                {t("printingInstallation.whyUs.heading")}{" "}
                <span className="text-gradient-warm">
                  {t("printingInstallation.whyUs.headingHighlight")}
                </span>
              </h2>
              <p className="text-body-lg mb-8">
                {t("printingInstallation.whyUs.description")}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "professionalTeam",
                  "qualityMaterials",
                  "onTimeDelivery",
                  "warranty",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-start gap-3 p-4 bg-surface rounded-xl"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
                      }}
                    >
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm mb-0.5">
                        {t(`printingInstallation.whyUs.features.${key}.title`)}
                      </h4>
                      <p className="text-xs text-text-muted">
                        {t(`printingInstallation.whyUs.features.${key}.desc`)}
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

      <MoreServices currentPage="printingInstallation" />

      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16"
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
            }}
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("printingInstallation.cta.title")}
                </h3>
                <p className="text-white/80 text-lg">
                  {t("printingInstallation.cta.description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href="https://wa.me/6282121755446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  {t("printingInstallation.cta.whatsapp")}
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors"
                >
                  {t("printingInstallation.cta.backToSignage")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

