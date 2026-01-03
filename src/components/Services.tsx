import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";
import { SectionHeader, GradientIcon, ArrowRightIcon, PhoneIcon } from "./ui";
import { importImages } from "../helper";

const serviceIcons = {
  customSignage: (
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
  hurufTimbul: (
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
        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
      />
    </svg>
  ),
  signageAkrilik: (
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
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    </svg>
  ),
  neonBox: (
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
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
  visualBranding: (
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
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
  displayAkrilik: (
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
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  ),
};

const whyChooseUsIcons = {
  custom: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      />
    </svg>
  ),
  precision: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
  quality: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  ),
};

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  const services = [
    {
      id: "custom-signage",
      icon: serviceIcons.customSignage,
      translationKey: "customSignage",
    },
    {
      id: "huruf-timbul",
      icon: serviceIcons.hurufTimbul,
      translationKey: "3dLettering",
    },
    {
      id: "signage-akrilik",
      icon: serviceIcons.signageAkrilik,
      translationKey: "acrylicSignage",
    },
    {
      id: "neon-box",
      icon: serviceIcons.neonBox,
      translationKey: "ledNeonBox",
    },
    {
      id: "visual-branding",
      icon: serviceIcons.visualBranding,
      translationKey: "visualBranding",
    },
    {
      id: "display-akrilik",
      icon: serviceIcons.displayAkrilik,
      translationKey: "acrylicDisplays",
    },
  ];

  const processSteps = [
    { step: 1, translationKey: "consult" },
    { step: 2, translationKey: "design" },
    { step: 3, translationKey: "produce" },
    { step: 4, translationKey: "install" },
  ];

  const whyChooseUs = [
    { icon: whyChooseUsIcons.custom, translationKey: "customEverything" },
    { icon: whyChooseUsIcons.precision, translationKey: "precisionCraft" },
    { icon: whyChooseUsIcons.quality, translationKey: "qualityAssured" },
  ];

  return (
    <div ref={ref} className="relative bg-white">
      <div className="py-20 md:py-28 bg-surface" role="region" aria-labelledby="services-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-subheading mb-4 block">
                {t("services.sectionTitle")}
              </span>
              <h2 id="services-heading" className="text-heading text-primary mb-6">
                {t("services.heading")}{" "}
                <span className="text-gradient">
                  {t("services.headingHighlight")}
                </span>
              </h2>
              <p className="text-body-lg mb-8 max-w-xl">
                {t("services.description")}
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.translationKey}
                    className="flex items-start gap-3"
                  >
                    <GradientIcon size="sm">{item.icon}</GradientIcon>
                    <div>
                      <h4 className="font-display font-semibold text-primary mb-0.5">
                        {t(`services.whyChooseUs.${item.translationKey}.title`)}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {t(`services.whyChooseUs.${item.translationKey}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src={importImages("signage", "23.jpeg")}
                  alt="Professional Signage"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-border max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-display font-bold text-gradient">
                    50+
                  </span>
                  <span className="text-xs text-text-muted">
                    {t("services.materialOptions")}
                  </span>
                </div>
                <p className="text-xs text-text-muted">
                  {t("services.materialOptionsDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="py-20 md:py-28" role="region" aria-labelledby="expertise-heading">
        <div className="container">
          <SectionHeader
            subheading={t("services.expertiseTitle")}
            heading={
              <>
                {t("services.expertiseHeading")}{" "}
                <span className="text-gradient-warm">
                  {t("services.expertiseHighlight")}
                </span>
              </>
            }
            description={t("services.expertiseDesc")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article key={service.id} className="service-card p-6">
                <div className="feature-icon">{service.icon}</div>

                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                  {t(`services.items.${service.translationKey}.tagline`)}
                </p>
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  {t(`services.items.${service.translationKey}.title`)}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {t(`services.items.${service.translationKey}.desc`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(
                    t(`services.items.${service.translationKey}.features`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2.5 py-1 bg-surface rounded-md text-text-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-blue transition-colors"
                >
                  {t("services.learnMore")}
                  <ArrowRightIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div id="process" className="py-20 md:py-28 bg-surface">
        <div className="container">
          <SectionHeader
            subheading={t("process.sectionTitle")}
            heading={
              <>
                {t("process.heading")}{" "}
                <span className="text-gradient">
                  {t("process.headingHighlight")}
                </span>
              </>
            }
            description={t("process.description")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={item.step} className="process-step group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="step-number">{item.step}</span>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-teal/30 to-transparent" />
                  )}
                </div>

                <h4 className="font-display text-lg font-bold text-primary mb-2 group-hover:text-teal transition-colors">
                  {t(`process.steps.${item.translationKey}.title`)}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {t(`process.steps.${item.translationKey}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn">
              {t("process.getStarted")}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28">
        <div className="container">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)",
            }}
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal/20 to-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple/20 to-pink/20 rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("cta.transformSpace")}
                </h3>
                <p className="text-white/70 text-lg">
                  {t("cta.createTogether")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="#contact" className="btn">
                  {t("cta.getQuote")}
                </a>
                <a
                  href="tel:+6282121755446"
                  className="btn-ghost text-white border border-white/20 hover:bg-white/10 rounded-full"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  {t("cta.callUs")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
