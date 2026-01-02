import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";
import { GradientIcon, ArrowRightIcon, CheckIcon } from "./ui";
import { importImages } from "../helper";

const benefitIcons = [
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>,
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>,
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>,
];

export default function Products() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  const materials = [
    "acrylic", "stainlessSteel", "galvanized", "aluminum", "pvc", "brass"
  ];

  const benefits = [
    { translationKey: "noMinimum", iconIndex: 0 },
    { translationKey: "freeConsultation", iconIndex: 1 },
    { translationKey: "nationwide", iconIndex: 2 },
    { translationKey: "flexiblePayment", iconIndex: 3 },
  ];

  const features = [
    t("products.features.customDesign"),
    t("products.features.anySize"),
    t("products.features.templates"),
    t("products.features.fastProduction"),
  ];

  return (
    <div className="relative bg-white" ref={ref}>
      <div id="products" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-subheading mb-4 block">{t("products.sectionTitle")}</span>
              <h2 className="text-heading text-primary mb-6">
                {t("products.heading")} <span className="text-gradient">{t("products.headingHighlight")}</span>
              </h2>
              <p className="text-body-lg mb-8">
                {t("products.description")}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {materials.map((material, index) => (
                  <div
                    key={material}
                    className="bg-surface p-4 rounded-xl border border-border hover:border-transparent hover:shadow-lg transition-all duration-300 group"
                    style={{ 
                      ['--hover-gradient' as string]: index % 3 === 0 
                        ? 'linear-gradient(135deg, rgba(0,180,180,0.1) 0%, rgba(59,130,246,0.1) 100%)'
                        : index % 3 === 1
                        ? 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(236,72,153,0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)'
                    }}
                  >
                    <p className="font-display font-semibold text-primary text-sm mb-0.5 group-hover:text-teal transition-colors">
                      {t(`products.materials.${material}.name`)}
                    </p>
                    <p className="text-xs text-text-muted">{t(`products.materials.${material}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src={importImages("signage", "7.jpeg")}
                  alt="High Quality Signage"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-white/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">2+</p>
                    <p className="text-xs text-text-muted">{t("products.warranty")}</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">100%</p>
                    <p className="text-xs text-text-muted">{t("products.authentic")}</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">24/7</p>
                    <p className="text-xs text-text-muted">{t("products.support")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.translationKey} className="text-center group">
                <GradientIcon 
                  variant={index % 2 === 0 ? "teal-blue" : "orange-pink"} 
                  size="lg"
                  className="mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  {benefitIcons[benefit.iconIndex]}
                </GradientIcon>
                <h4 className="font-display font-semibold text-white mb-1">
                  {t(`products.benefits.${benefit.translationKey}.title`)}
                </h4>
                <p className="text-white/60 text-sm">
                  {t(`products.benefits.${benefit.translationKey}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="img-reveal aspect-4/3">
                  <img
                    src={importImages("signage", "37.jpeg")}
                    alt="Signage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="img-reveal aspect-square">
                  <img
                    src={importImages("signage", "10.jpeg")}
                    alt="Signage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="img-reveal aspect-3/4">
                  <img
                    src={importImages("signage", "6.jpeg")}
                    alt="Signage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-subheading mb-4 block">{t("products.readyToOrder")}</span>
              <h3 className="text-heading text-primary mb-6">
                {t("products.acrylicSigns")} <span className="text-gradient-warm">{t("products.readyNow")}</span>
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                {t("products.readyDesc")}
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ 
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, rgba(0,180,180,0.15) 0%, rgba(59,130,246,0.15) 100%)'
                          : 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.15) 100%)'
                      }}
                    >
                      <CheckIcon className="w-4 h-4 text-teal" />
                    </div>
                    <span className="text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn">
                {t("products.viewCatalog")}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
