import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface StructuredDataProps {
  type?: "Organization" | "LocalBusiness" | "BreadcrumbList" | "WebSite" | "Service";
  customData?: Record<string, any>;
}

export function StructuredData({
  type = "Organization",
  customData,
}: StructuredDataProps) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  useEffect(() => {
    const getStructuredData = () => {
      const baseOrganization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "SignWorld",
        alternateName: "SignWorld Signage & Branding",
        url: baseUrl,
        logo: `${baseUrl}/logo.jpg`,
        description:
          i18n.language === "id"
            ? "Solusi Professional Signage & Visual Branding. Custom signage, huruf timbul, signage akrilik, dan visual branding untuk brand Anda."
            : "Professional Signage & Visual Branding Solutions. Custom signage, 3D lettering, acrylic signage, and visual branding for your brand.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
          addressLocality: "Indonesia",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+62-821-2175-5446",
            contactType: "Customer Service",
            availableLanguage: ["Indonesian", "English"],
            email: "thesignworldadv@gmail.com",
            areaServed: "ID",
          },
        ],
        sameAs: ["https://wa.me/6282121755446"],
      };

      const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}#organization`,
        name: "SignWorld",
        alternateName: "SignWorld Signage & Branding",
        image: `${baseUrl}/logo.jpg`,
        logo: `${baseUrl}/logo.jpg`,
        url: baseUrl,
        telephone: "+62-821-2175-5446",
        email: "thesignworldadv@gmail.com",
        description:
          i18n.language === "id"
            ? "Solusi Professional Signage & Visual Branding. Custom signage, huruf timbul, signage akrilik, dan visual branding untuk brand Anda."
            : "Professional Signage & Visual Branding Solutions. Custom signage, 3D lettering, acrylic signage, and visual branding for your brand.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
          addressLocality: "Indonesia",
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        sameAs: ["https://wa.me/6282121755446"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-821-2175-5446",
          email: "thesignworldadv@gmail.com",
          contactType: "Customer Service",
          availableLanguage: ["Indonesian", "English"],
          areaServed: "ID",
        },
      };

      const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: i18n.language === "id" ? "Beranda" : "Home",
            item: baseUrl,
          },
          ...(location.pathname !== "/"
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: getPageName(location.pathname),
                  item: `${baseUrl}${location.pathname}`,
                },
              ]
            : []),
        ],
      };

      const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "SignWorld",
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      };

      const service = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Signage & Visual Branding",
        provider: {
          "@type": "LocalBusiness",
          name: "SignWorld",
          telephone: "+62-821-2175-5446",
          email: "thesignworldadv@gmail.com",
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        description:
          i18n.language === "id"
            ? "Layanan signage custom, huruf timbul 3D, signage akrilik, LED neon box, visual branding, dan jasa pemasangan profesional."
            : "Custom signage services, 3D lettering, acrylic signage, LED neon box, visual branding, and professional installation services.",
      };

      switch (type) {
        case "LocalBusiness":
          return localBusiness;
        case "BreadcrumbList":
          return breadcrumbList;
        case "WebSite":
          return website;
        case "Service":
          return service;
        case "Organization":
        default:
          return baseOrganization;
      }
    };

    const getPageName = (pathname: string): string => {
      const pageNames: Record<string, { en: string; id: string }> = {
        "/printing": { en: "Printing Services", id: "Layanan Printing" },
        "/merchandise": { en: "Merchandise", id: "Merchandise" },
        "/printing-installation": {
          en: "Installation Services",
          id: "Jasa Pemasangan",
        },
      };
      const page = pageNames[pathname] || { en: "Page", id: "Halaman" };
      return i18n.language === "id" ? page.id : page.en;
    };

    const data = customData || getStructuredData();
    const scriptId = `structured-data-${type.toLowerCase()}`;

    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, customData, location.pathname, baseUrl, i18n.language]);

  return null;
}

export default StructuredData;
