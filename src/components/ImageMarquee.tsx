import { useState, useEffect } from "react";

const portfolioImages = [
  // Row 1 - Left to Right
  [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      alt: "Office Signage",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop",
      alt: "Reception Branding",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      alt: "Building Signage",
      category: "Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
      alt: "Corporate Identity",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=400&fit=crop",
      alt: "Retail Display",
      category: "Retail",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      alt: "Exhibition Booth",
      category: "Event",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
      alt: "Modern Office Sign",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
      alt: "Workspace Branding",
      category: "Interior",
    },
  ],
  // Row 2 - Right to Left
  [
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      alt: "Tech Office",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      alt: "Building Facade",
      category: "Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&h=400&fit=crop",
      alt: "Restaurant Sign",
      category: "F&B",
    },
    {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop",
      alt: "Corporate Office",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop",
      alt: "Business Center",
      category: "Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      alt: "Meeting Room Sign",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
      alt: "Startup Office",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop",
      alt: "Co-working Space",
      category: "Interior",
    },
  ],
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
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Previous"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Next"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-5xl max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src.replace("w=600&h=400", "w=1200&h=800")}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Image info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
          <span className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2" style={{ background: 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)' }}>
            {image.category}
          </span>
          <h3 className="text-white font-display font-semibold text-lg">
            {image.alt}
          </h3>
        </div>
      </div>

      {/* Keyboard hint */}
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
    <section id="portfolio" className="py-20 md:py-28 bg-surface overflow-hidden">
      <div className="container mb-12">
        <div className="section-header">
          <span className="text-subheading">Our Work</span>
          <h2 className="text-heading text-primary">
            Crafted with <span className="text-gradient-warm">precision.</span>
          </h2>
          <p>Click any image to explore our portfolio</p>
        </div>
      </div>

      {/* Marquee Container - Uses CSS hover to pause */}
      <div className="marquee-container space-y-4">
        {/* Row 1 - Left to Right */}
        <div className="marquee-row">
          <div className="marquee-track animate-marquee">
            {/* Duplicate for seamless loop */}
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
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}>
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="marquee-row">
          <div className="marquee-track animate-marquee-reverse">
            {/* Duplicate for seamless loop */}
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
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2 py-1 rounded text-white text-xs font-medium mb-2" style={{ background: 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)' }}>
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container mt-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="stat-number">1000+</p>
            <p className="text-text-muted text-sm">Projects Completed</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div>
            <p className="stat-number">100+</p>
            <p className="text-text-muted text-sm">Happy Clients</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div>
            <p className="stat-number">34</p>
            <p className="text-text-muted text-sm">Provinces Covered</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
