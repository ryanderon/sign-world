import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export function useSEO({
  title,
  description,
  keywords,
  ogImage = "/logo.jpg",
  ogType = "website",
  canonical,
  noindex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    document.title = title;

    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", `${baseUrl}${ogImage}`, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag(
      "og:locale",
      i18n.language === "id" ? "id_ID" : "en_US",
      true
    );
    updateMetaTag("og:site_name", "SignWorld", true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${baseUrl}${ogImage}`);

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    document.documentElement.lang = i18n.language;

    updateMetaTag("theme-color", "#ffffff");
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogType,
    canonical,
    noindex,
    baseUrl,
    currentUrl,
    canonicalUrl,
    i18n.language,
  ]);
}
