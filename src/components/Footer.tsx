import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import { 
  GradientIcon, 
  ChevronRightIcon, 
  WhatsAppIcon, 
  EmailIcon, 
  LocationIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon 
} from "./ui";

const footerLinks = {
  services: [
    { labelKey: "footer.links.items.customSignage", href: "#services" },
    { labelKey: "footer.links.items.3dLettering", href: "#services" },
    { labelKey: "footer.links.items.acrylicSignage", href: "#services" },
    { labelKey: "footer.links.items.ledNeonBox", href: "#services" },
    { labelKey: "footer.links.items.visualBranding", href: "#services" },
  ],
  products: [
    { labelKey: "footer.links.items.premiumMaterials", href: "#products" },
    { labelKey: "footer.links.items.readyMadeSigns", href: "#products" },
    { labelKey: "footer.links.items.ledSolutions", href: "#products" },
    { labelKey: "footer.links.items.acrylicDisplays", href: "#products" },
  ],
  company: [
    { labelKey: "footer.links.items.aboutUs", href: "#about" },
    { labelKey: "footer.links.items.portfolio", href: "#portfolio" },
    { labelKey: "footer.links.items.testimonials", href: "#clients" },
    { labelKey: "footer.links.items.contact", href: "#contact" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/signworld.id", icon: <InstagramIcon /> },
  { label: "TikTok", href: "https://tiktok.com/@signworld.id", icon: <TikTokIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/company/signworld", icon: <LinkedInIcon /> },
];

const features = [
  { icon: "✓", textKey: "footer.features.freeConsultation" },
  { icon: "✓", textKey: "footer.features.fastResponse" },
  { icon: "✓", textKey: "footer.features.competitivePricing" },
  { icon: "✓", textKey: "footer.features.qualityGuaranteed" },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      <div id="contact" className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-subheading mb-4 block">{t("footer.getInTouch")}</span>
              <h2 className="text-heading text-primary mb-6">
                {t("footer.letsCreate")} <span className="text-gradient-warm">{t("footer.createHighlight")}</span> {t("footer.together")}
              </h2>
              <p className="text-text-muted text-lg max-w-md mb-8">
                {t("footer.readyToTransform")}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div key={item.textKey} className="flex items-center gap-2 text-sm text-text-muted">
                    <GradientIcon 
                      variant={index % 2 === 0 ? "teal-blue" : "orange-pink"} 
                      size="sm" 
                      className="w-5 h-5 text-xs"
                    >
                      {item.icon}
                    </GradientIcon>
                    {t(item.textKey)}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <div className="space-y-4">
                <a
                  href="https://wa.me/6282200000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(21,128,61,0.08) 100%)' }}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                    <WhatsAppIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted">{t("footer.contact.whatsapp")}</p>
                    <p className="font-display font-bold text-lg text-primary group-hover:text-green-600 transition-colors">
                      +62 822-0000-0000
                    </p>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-text-dim group-hover:text-green-600 transition-colors" />
                </a>

                <a
                  href="mailto:hello@signworld.id"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(236,72,153,0.08) 100%)' }}
                >
                  <GradientIcon variant="orange-pink">
                    <EmailIcon />
                  </GradientIcon>
                  <div className="flex-1">
                    <p className="text-sm text-text-muted">{t("footer.contact.email")}</p>
                    <p className="font-display font-bold text-lg text-primary group-hover:text-pink transition-colors">
                      hello@signworld.id
                    </p>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-text-dim group-hover:text-pink transition-colors" />
                </a>

                <div 
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,180,180,0.08) 0%, rgba(59,130,246,0.08) 100%)' }}
                >
                  <GradientIcon variant="teal-blue">
                    <LocationIcon />
                  </GradientIcon>
                  <div>
                    <p className="text-sm text-text-muted mb-1">{t("footer.contact.location")}</p>
                    <p className="font-medium text-primary text-sm">
                      Jl. Raya Signage No. 123<br />
                      Jakarta Selatan, 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-border">
                  <img src={logo} alt="SignWorld" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-display text-lg font-bold text-primary block">SIGNWORLD</span>
                  <span className="text-[10px] text-text-muted tracking-wider uppercase">{t("footer.brand.tagline")}</span>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
                {t("footer.brand.description")}
              </p>

              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-white transition-all duration-300"
                    style={{ 
                      ['--hover-bg' as string]: index === 0 
                        ? 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'
                        : index === 1
                        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                        : 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = e.currentTarget.style.getPropertyValue('--hover-bg')}
                    onMouseLeave={(e) => e.currentTarget.style.background = ''}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-display font-semibold text-sm text-primary mb-4">
                {t("footer.links.services")}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-teal transition-colors duration-300"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-display font-semibold text-sm text-primary mb-4">
                {t("footer.links.products")}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-teal transition-colors duration-300"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-display font-semibold text-sm text-primary mb-4">
                {t("footer.links.company")}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-teal transition-colors duration-300"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-dim text-sm">
              {t("footer.copyright", { year: currentYear })}
            </p>
            <div className="flex items-center gap-6 text-sm text-text-dim">
              <a href="#" className="hover:text-teal transition-colors">{t("footer.privacyPolicy")}</a>
              <a href="#" className="hover:text-teal transition-colors">{t("footer.termsOfService")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
