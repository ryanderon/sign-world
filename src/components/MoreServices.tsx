import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";
import { SectionHeader, ArrowRightIcon } from "./ui";

const serviceCategories = [
  {
    id: "signage",
    translationKey: "signage",
    href: "/#services",
    isExternal: true,
    gradient: "from-teal to-blue",
    bgGradient: "from-teal/5 to-blue/5",
    borderColor: "border-teal/20",
    textColor: "text-teal",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=350&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: "printing",
    translationKey: "printing",
    href: "/printing",
    isExternal: false,
    gradient: "from-orange to-pink",
    bgGradient: "from-orange/5 to-pink/5",
    borderColor: "border-orange/20",
    textColor: "text-orange",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc1d67?w=500&h=350&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    id: "merchandise",
    translationKey: "merchandise",
    href: "/merchandise",
    isExternal: false,
    gradient: "from-purple to-pink",
    bgGradient: "from-purple/5 to-pink/5",
    borderColor: "border-purple/20",
    textColor: "text-purple",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=350&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

interface MoreServicesProps {
  currentPage?: "signage" | "printing" | "merchandise";
}

export default function MoreServices({ currentPage }: MoreServicesProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  const isFeatured = (categoryId: string) => {
    if (!currentPage) return categoryId === "signage";
    return false;
  };

  const isCurrent = (categoryId: string) => {
    return currentPage === categoryId;
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-surface">
      <div className="container">
        <SectionHeader
          subheading={t("moreServices.sectionTitle")}
          heading={<>{t("moreServices.heading")} <span className="text-gradient-warm">{t("moreServices.headingHighlight")}</span></>}
          description={t("moreServices.description")}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {serviceCategories.map((category) => {
            const featured = isFeatured(category.id);
            const current = isCurrent(category.id);
            
            const CardContent = (
              <article 
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 border ${category.borderColor} ${
                  featured ? 'ring-2 ring-teal/30 hover:shadow-2xl' : 
                  current ? 'ring-2 ring-primary/30 opacity-75' : 
                  'hover:shadow-2xl'
                }`}
              >
                {featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-teal to-blue shadow-lg">
                      {t("moreServices.featured")}
                    </span>
                  </div>
                )}
                
                {current && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary/80 shadow-lg">
                      {t("moreServices.currentPage")}
                    </span>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(`moreServices.items.${category.translationKey}.title`)}
                    className={`w-full h-full object-cover transition-transform duration-700 ${current ? '' : 'group-hover:scale-110'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {category.icon}
                    </div>
                  </div>
                </div>

                <div className={`p-6 bg-gradient-to-br ${category.bgGradient}`}>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">
                    {t(`moreServices.items.${category.translationKey}.title`)}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">
                    {t(`moreServices.items.${category.translationKey}.desc`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(t(`moreServices.items.${category.translationKey}.tags`, { returnObjects: true }) as string[]).map((tag) => (
                      <span 
                        key={tag} 
                        className={`text-xs px-2.5 py-1 rounded-md bg-white/80 ${category.textColor} font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`inline-flex items-center gap-2 text-sm font-semibold ${category.textColor} ${current ? '' : 'group-hover:gap-3'} transition-all`}>
                    {current ? t("moreServices.youreHere") : t(`moreServices.items.${category.translationKey}.cta`)}
                    {!current && <ArrowRightIcon className="w-4 h-4" />}
                  </div>
                </div>
              </article>
            );

            if (current) {
              return <div key={category.id} className="cursor-default">{CardContent}</div>;
            }

            return category.isExternal ? (
              <a key={category.id} href={category.href}>
                {CardContent}
              </a>
            ) : (
              <Link key={category.id} to={category.href}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
