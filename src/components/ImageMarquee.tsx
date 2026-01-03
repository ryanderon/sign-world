import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  SectionHeader,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ZoomIcon,
} from "./ui";
import { getImageList } from "../helper";

const portfolioImages = [
  getImageList("signage").map((image, index) => ({
    src: image,
    alt: `Signage ${index + 1}`,
    category: "Signage",
  })),
  getImageList("printing").map((image, index) => ({
    src: image,
    alt: `Printing ${index + 1}`,
    category: "Printing",
  })),

  getImageList("merchandise").map((image, index) => ({
    src: image,
    alt: `Merchandise ${index + 1}`,
    category: "Merchandise",
  })),
];

interface LightboxProps {
  image: { src: string; alt: string; category: string } | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ image, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
      >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeftIcon />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRightIcon />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src.replace("w=600&h=400", "w=1200&h=800")}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
          <span
            className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2"
            style={{
              background: "linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)",
            }}
          >
            {image.category}
          </span>
          <h3 className="text-white font-display font-semibold text-lg">
            {image.alt}
          </h3>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/50 text-sm">
        <span className="flex items-center gap-1">
          <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
          <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
          Navigate
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
          Close
        </span>
      </div>
    </div>
  );
}

export default function ImageMarquee() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    category: string;
    rowIndex: number;
    imageIndex: number;
  } | null>(null);

  const allImages = portfolioImages.flat();

  const handleImageClick = (
    image: { src: string; alt: string; category: string },
    rowIndex: number,
    imageIndex: number
  ) => {
    setSelectedImage({ ...image, rowIndex, imageIndex });
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentFlatIndex =
      selectedImage.rowIndex * portfolioImages[0].length +
      selectedImage.imageIndex;
    const prevIndex =
      (currentFlatIndex - 1 + allImages.length) % allImages.length;
    const newRowIndex = Math.floor(prevIndex / portfolioImages[0].length);
    const newImageIndex = prevIndex % portfolioImages[0].length;
    setSelectedImage({
      ...allImages[prevIndex],
      rowIndex: newRowIndex,
      imageIndex: newImageIndex,
    });
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentFlatIndex =
      selectedImage.rowIndex * portfolioImages[0].length +
      selectedImage.imageIndex;
    const nextIndex = (currentFlatIndex + 1) % allImages.length;
    const newRowIndex = Math.floor(nextIndex / portfolioImages[0].length);
    const newImageIndex = nextIndex % portfolioImages[0].length;
    setSelectedImage({
      ...allImages[nextIndex],
      rowIndex: newRowIndex,
      imageIndex: newImageIndex,
    });
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-surface overflow-hidden"
      aria-label={t("portfolio.sectionTitle")}
    >
      <div className="container mb-12">
        <SectionHeader
          subheading={t("portfolio.sectionTitle")}
          heading={
            <>
              {t("portfolio.heading")}{" "}
              <span className="text-gradient-warm">
                {t("portfolio.headingHighlight")}
              </span>
            </>
          }
          description={t("portfolio.description")}
        />
      </div>

      <div className="marquee-container space-y-4">
        <div className="marquee-row">
          <div className="marquee-track animate-marquee">
            {[...portfolioImages[0], ...portfolioImages[0]].map(
              (image, index) => (
                <div
                  key={`row1-${index}`}
                  onClick={() =>
                    handleImageClick(
                      image,
                      0,
                      index % portfolioImages[0].length
                    )
                  }
                  className="marquee-item group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span
                      className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
                      }}
                    >
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ZoomIcon />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="marquee-row">
          <div className="marquee-track animate-marquee-reverse">
            {[...portfolioImages[1], ...portfolioImages[1]].map(
              (image, index) => (
                <div
                  key={`row2-${index}`}
                  onClick={() =>
                    handleImageClick(
                      image,
                      1,
                      index % portfolioImages[1].length
                    )
                  }
                  className="marquee-item group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span
                      className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)",
                      }}
                    >
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ZoomIcon />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="marquee-row">
          <div className="marquee-track animate-marquee">
            {[...portfolioImages[2], ...portfolioImages[2]].map(
              (image, index) => (
                <div
                  key={`row1-${index}`}
                  onClick={() =>
                    handleImageClick(
                      image,
                      2,
                      index % portfolioImages[2].length
                    )
                  }
                  className="marquee-item group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span
                      className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
                      }}
                    >
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ZoomIcon />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="stat-number">1000+</p>
            <p className="text-text-muted text-sm">
              {t("portfolio.stats.projects")}
            </p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div>
            <p className="stat-number">100+</p>
            <p className="text-text-muted text-sm">
              {t("portfolio.stats.clients")}
            </p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div>
            <p className="stat-number">34</p>
            <p className="text-text-muted text-sm">
              {t("portfolio.stats.provinces")}
            </p>
          </div>
        </div>
      </div>

      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
