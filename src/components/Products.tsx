import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const productCategories = [
  {
    id: "signage-ready",
    title: "Signage Siap Pakai",
    subtitle: "Stok Signage Akrilik",
    desc: "Butuh papan buka–tutup, tanda kantor, penunjuk APAR, atau kebutuhan signage kecil lainnya? Kami bisa bantu cetak di akrilik berkualitas tinggi.",
    features: [
      "Request desain custom",
      "Pilih ukuran & warna",
      "Template siap pakai",
    ],
    images: [
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    ],
    cta: "Lihat Katalog",
    highlight: true,
  },
  {
    id: "custom-materials",
    title: "Material Custom",
    subtitle: "Berbagai Pilihan Bahan",
    desc: "Kami bekerja dengan beragam bahan seperti akrilik, stainless, galvanis, PVC, dan lainnya untuk menyesuaikan kebutuhan desain dan lokasi Anda.",
    materials: ["Akrilik", "Stainless Steel", "Galvanis", "PVC", "Aluminium", "Kayu"],
  },
  {
    id: "led-solutions",
    title: "Solusi LED",
    subtitle: "Pencahayaan Premium",
    desc: "Neon box, LED lightbox, dan solusi pencahayaan lainnya dengan teknologi hemat energi dan tampilan premium.",
    specs: [
      { label: "Ketebalan", value: "1.5cm" },
      { label: "Hemat Energi", value: "85%" },
      { label: "Garansi", value: "2 Tahun" },
    ],
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
    caption: "Huruf Timbul Stainless",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    caption: "Neon Box LED",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    caption: "Office Signage",
  },
  {
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop",
    caption: "Building Directory",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
    caption: "Reception Sign",
  },
  {
    src: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=400&fit=crop",
    caption: "Retail Display",
  },
];

const benefits = [
  {
    icon: "📦",
    title: "Tanpa Minimal Pemesanan",
    desc: "Pesan satuan hingga banyak, semua bisa kami layani.",
  },
  {
    icon: "💬",
    title: "Konsultasi Gratis",
    desc: "Tim kami siap bantu untuk desain dan pengiriman Anda.",
  },
  {
    icon: "🚚",
    title: "Kirim Keseluruh Indonesia",
    desc: "Kami kirim signage ke mana pun, cepat dan aman.",
  },
  {
    icon: "💳",
    title: "Pembayaran Fleksibel",
    desc: "Transfer bank, e-wallet, dan kartu kredit.",
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div className="relative bg-white" ref={ref}>
      {/* Header Section */}
      <div className="bg-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-subheading mb-4 block">Produk Kami</span>
            <h2 className="text-heading text-primary mb-6">
              Stok Signage{" "}
              <span className="text-accent">Siap Pakai</span>
            </h2>
            <p className="text-body-lg">
              Kami juga sedia signage akrilik siap desain & pesan. Bisa request 
              desain custom, ukuran, warna, atau pilih template siap pakai.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="py-20 md:py-28">
        <div className="container">
          {productCategories.filter(p => p.highlight).map((product) => (
            <div
              key={product.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="img-reveal aspect-[4/3]">
                    <img
                      src={product.images?.[0]}
                      alt="Signage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="img-reveal aspect-square">
                    <img
                      src={product.images?.[1]}
                      alt="Signage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="img-reveal aspect-[3/4]">
                    <img
                      src={product.images?.[2]}
                      alt="Signage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-subheading mb-4 block">{product.subtitle}</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                  {product.title}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {product.desc}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {product.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="btn">
                  {product.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Materials & LED Section */}
      <div className="bg-surface py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.filter(p => !p.highlight).map((product) => (
              <div
                key={product.id}
                className="bg-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300"
              >
                <span className="text-subheading mb-3 block">{product.subtitle}</span>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  {product.title}
                </h3>
                <p className="text-text-muted mb-6">{product.desc}</p>

                {/* Materials list */}
                {product.materials && (
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material) => (
                      <span
                        key={material}
                        className="px-4 py-2 bg-surface rounded-full text-sm font-medium text-text-muted"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                )}

                {/* Specs */}
                {product.specs && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="text-center p-4 bg-surface rounded-xl">
                        <p className="font-display text-2xl font-bold text-primary">{spec.value}</p>
                        <p className="text-xs text-text-muted mt-1">{spec.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-subheading mb-4 block">Galeri Proyek</span>
            <h3 className="text-heading text-primary">
              Hasil Karya <span className="text-accent">Terbaik Kami</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Lihat Lebih Banyak
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="bg-primary text-text-light py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-display font-bold mb-2">{benefit.title}</h4>
                <p className="text-text-light/60 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
