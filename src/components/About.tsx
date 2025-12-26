import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

export default function About() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  const values = [
    { titleKey: "deadlineFocused" },
    { titleKey: "colorAccuracy" },
  ];

  return (
    <div className="container" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="img-reveal">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop"
              alt="SignWorld workspace"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -right-8 -bottom-8 w-48 h-48 bg-surface-alt border border-border p-6">
            <p className="font-display text-6xl font-medium text-secondary">13+</p>
            <p className="text-sm text-text-muted mt-2">{t("about.yearsOfExcellence")}</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-subheading mb-6">{t("about.sectionTitle")}</p>
          
          <h2 className="text-heading mb-8">
            {t("about.heading")}{" "}
            <span className="italic text-secondary">{t("about.headingHighlight")}</span>
          </h2>

          <div className="space-y-6 text-body-lg">
            <p>{t("about.content1")}</p>
            <p>{t("about.content2")}</p>
            <p className="text-primary font-medium">{t("about.content3")}</p>
          </div>

          <div className="divider my-10" />

          <div className="grid grid-cols-2 gap-8">
            {values.map((item) => (
              <div key={item.titleKey}>
                <h4 className="font-body font-semibold text-primary mb-2">
                  {t(`about.values.${item.titleKey}.title`)}
                </h4>
                <p className="text-sm text-text-muted">
                  {t(`about.values.${item.titleKey}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn mt-10 inline-flex">
            {t("about.letsTalk")}
          </a>
        </div>
      </div>
    </div>
  );
}
