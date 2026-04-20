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

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: i18n.language === "id" ? "Berapa harga jasa pembuatan signage di Jakarta?" : "How much does signage cost in Jakarta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: i18n.language === "id"
            ? "Harga signage bervariasi tergantung ukuran, material, dan desain. SignWorld menawarkan konsultasi gratis untuk estimasi harga yang akurat. Hubungi kami via WhatsApp di +62 821-2175-5446."
            : "Signage pricing varies depending on size, material, and design. SignWorld offers free consultation for accurate price estimates. Contact us via WhatsApp at +62 821-2175-5446.",
        },
      },
      {
        "@type": "Question",
        name: i18n.language === "id" ? "Material apa saja yang tersedia untuk signage?" : "What materials are available for signage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: i18n.language === "id"
            ? "Kami menyediakan berbagai material premium termasuk akrilik, stainless steel, galvanis, aluminium, PVC, dan kuningan. Setiap material dipilih sesuai kebutuhan lokasi dan desain."
            : "We offer various premium materials including acrylic, stainless steel, galvanized steel, aluminum, PVC, and brass. Each material is selected based on location needs and design.",
        },
      },
      {
        "@type": "Question",
        name: i18n.language === "id" ? "Berapa lama proses pembuatan signage?" : "How long does the signage production process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: i18n.language === "id"
            ? "Proses pembuatan signage umumnya 7-14 hari kerja tergantung kompleksitas desain dan material. Proses dimulai dari konsultasi, desain, produksi, hingga pemasangan profesional."
            : "Signage production typically takes 7-14 business days depending on design complexity and materials. The process includes consultation, design, production, and professional installation.",
        },
      },
      {
        "@type": "Question",
        name: i18n.language === "id" ? "Apakah SignWorld melayani pemasangan di luar Jakarta?" : "Does SignWorld serve areas outside Jakarta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: i18n.language === "id"
            ? "Ya, SignWorld melayani seluruh Indonesia termasuk Bogor, Depok, Tangerang, Bekasi, dan 34 provinsi lainnya. Kami memastikan pengiriman aman dan pemasangan profesional di mana saja."
            : "Yes, SignWorld serves all of Indonesia including Bogor, Depok, Tangerang, Bekasi, and all 34 provinces. We ensure safe delivery and professional installation anywhere.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="WebSite" />
      <StructuredData type="BreadcrumbList" />
      <StructuredData customData={faqData} />
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
