import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Services from "../components/Services";
import MoreServices from "../components/MoreServices";
import ImageMarquee from "../components/ImageMarquee";
import Products from "../components/Products";
import Clients from "../components/Clients";
import { useSEO } from "../hooks/useSEO";
import StructuredData from "../components/StructuredData";

export default function Home() {
  const { t, i18n } = useTranslation();
  
  useSEO({
    title: i18n.language === "id" 
      ? "Sign World | Signage & Visual Branding Professional di Indonesia"
      : "Sign World | Professional Signage & Visual Branding in Indonesia",
    description: i18n.language === "id"
      ? "Signage di Indonesia terpercaya. Jasa signage, neon lightbox jakarta, jasa pemasangan baliho, custom signage akrilik, dan visual branding profesional. Hubungi SignWorld sekarang!"
      : "Professional signage solutions in Indonesia. Custom signage, neon lightbox, installation services, acrylic signage, and visual branding. Contact SignWorld today!",
    keywords: i18n.language === "id"
      ? "signage di jakarta, jasa pemasangan baliho, jasa pemasangan, neon lightbox jakarta, signage jakarta, custom signage jakarta, huruf timbul jakarta, signage akrilik jakarta, jasa pemasangan billboard jakarta, neon box jakarta"
      : "signage jakarta, custom signage jakarta, neon lightbox jakarta, installation services jakarta, acrylic signage jakarta, signage indonesia",
  });

  return (
    <>
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="WebSite" />
      <Hero />
      <section id="services" aria-label={t("services.sectionTitle")}>
        <Services />
      </section>
      <section id="more-services" aria-label={t("moreServices.sectionTitle")}>
        <MoreServices />
      </section>
      <section id="portfolio" aria-label={t("portfolio.sectionTitle")}>
        <ImageMarquee />
      </section>
      <section id="products" aria-label={t("products.sectionTitle")}>
        <Products />
      </section>
      <section id="clients" aria-label={t("clients.sectionTitle")}>
        <Clients />
      </section>
    </>
  );
}
