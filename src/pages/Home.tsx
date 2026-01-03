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
      ? "SignWorld | Signage & Visual Branding Professional"
      : "SignWorld | Signage & Visual Branding Professional",
    description: i18n.language === "id"
      ? "Solusi Professional Signage & Visual Branding. Custom signage, huruf timbul, signage akrilik, dan visual branding untuk brand Anda."
      : "Premium signage solutions that transform spaces and elevate brands. From concept to installation—crafted with precision.",
    keywords: i18n.language === "id"
      ? "signage, huruf timbul, signage akrilik, visual branding, neon box, LED lightbox, custom signage, 3D lettering, signage jakarta, signage indonesia"
      : "signage, 3D lettering, acrylic signage, visual branding, neon box, LED lightbox, custom signage, signage jakarta, signage indonesia",
    canonical: typeof window !== "undefined" ? window.location.origin : "",
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
