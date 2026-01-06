import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";
import { SectionHeader, StarRating, GradientIcon, ArrowRightIcon } from "./ui";
import { getImageList } from "../helper";

const testimonials = [
  {
    id: 1,
    name: "Dian Rachmawati",
    role: "Brand Manager",
    avatar: "DR",
    rating: 5,
    titleId: "Melampaui setiap ekspektasi",
    titleEn: "Exceeded every expectation",
    contentId:
      "Profesional, responsif, dan detail-oriented. Mereka mengirimkan signage untuk 50+ outlet tepat waktu dengan kualitas konsisten. Partner sejati.",
    contentEn:
      "Professional, responsive, and detail-oriented. They delivered signage for 50+ outlets on time with consistent quality. A true partner.",
  },
  {
    id: 2,
    name: "Andi Hermawan",
    role: "Facility Manager",
    avatar: "AH",
    rating: 5,
    titleId: "Keunggulan kelas hospitality",
    titleEn: "Hospitality-grade excellence",
    contentId:
      "Mereka memahami standar kemewahan. Signage stainless steel lobby kami memukau—perawatan minimal, dampak maksimal.",
    contentEn:
      "They understand luxury standards. Our stainless steel lobby signage is stunning—minimal maintenance, maximum impact.",
  },
  {
    id: 3,
    name: "Novita Widjaja",
    role: "Marketing Director",
    avatar: "NW",
    rating: 5,
    titleId: "Solusi branding lengkap",
    titleEn: "Complete branding solution",
    contentId:
      "Dari sign lobby hingga wayfinding—mereka menangani seluruh kantor baru kami. Hasilnya mencerminkan identitas korporat kami dengan sempurna.",
    contentEn:
      "From lobby signs to wayfinding—they handled our entire new office. The result perfectly reflects our corporate identity.",
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Operations Director, Fast Food Chain",
    avatar: "BS",
    rating: 5,
    titleId: "Andal dalam skala besar",
    titleEn: "Reliable at scale",
    contentId:
      "Tiga tahun, 100+ outlet nasional. Kualitas konsisten, pengiriman andal. Mereka partner signage andalan kami.",
    contentEn:
      "Three years, 100+ outlets nationwide. Consistent quality, reliable delivery. They're our go-to signage partner.",
  },
];

export default function Clients() {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useGsapFadeIn(ref);

  const stats = [
    { number: "100+", labelKey: "trustedBrands" },
    { number: "13+", labelKey: "yearsExperience" },
    { number: "1000+", labelKey: "projectsDone" },
    { number: "24/7", labelKey: "supportReady" },
  ];

  const clients = getImageList("clients");

  return (
    <div ref={ref} className="relative bg-white">
      <div id="clients" className="py-20 md:py-28 bg-surface">
        <div className="container">
          <SectionHeader
            subheading={t("clients.sectionTitle")}
            heading={
              <>
                {t("clients.heading")}{" "}
                <span className="text-gradient">
                  {t("clients.headingHighlight")}
                </span>
              </>
            }
            description={t("clients.description")}
          />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {clients.map((client, index) => (
              <div key={index + 1} className="client-logo hover:bg-white">
                <img src={client} loading="lazy" alt={`client-${index}`} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <span className="text-text-muted text-sm">
              {t("clients.andMore")}
            </span>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <span className="text-subheading mb-4 block">
                {t("clients.testimonials.sectionTitle")}
              </span>
              <h3 className="text-heading text-primary mb-6">
                {t("clients.testimonials.heading")}{" "}
                <span className="text-gradient-warm">
                  {t("clients.testimonials.headingHighlight")}
                </span>
              </h3>

              <div
                className="flex items-center gap-4 mb-6 p-4 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,180,180,0.08) 0%, rgba(59,130,246,0.08) 100%)",
                }}
              >
                <div className="font-display text-5xl font-bold text-gradient">
                  4.9
                </div>
                <div>
                  <div className="mb-1">
                    <StarRating rating={5} />
                  </div>
                  <p className="text-sm text-text-muted">
                    {t("clients.testimonials.rating")}
                  </p>
                </div>
              </div>

              <p className="text-text-muted leading-relaxed mb-8">
                {t("clients.testimonials.satisfaction")}
              </p>

              <a href="#contact" className="btn">
                {t("clients.testimonials.startProject")}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card cursor-pointer transition-all ${
                    activeTestimonial === index
                      ? "ring-2 ring-teal border-transparent shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <GradientIcon
                        variant={index % 2 === 0 ? "teal-blue" : "orange-pink"}
                        size="sm"
                        className="rounded-full text-sm font-bold"
                      >
                        {testimonial.avatar}
                      </GradientIcon>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-text-muted">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} size="sm" />
                  </div>

                  <h5 className="font-display font-semibold text-primary mb-2">
                    "
                    {i18n.language === "id"
                      ? testimonial.titleId
                      : testimonial.titleEn}
                    "
                  </h5>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {i18n.language === "id"
                      ? testimonial.contentId
                      : testimonial.contentEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.labelKey} className="text-center">
                <p
                  className="font-display text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)"
                        : "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm">
                  {t(`clients.stats.${stat.labelKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
