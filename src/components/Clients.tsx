import { useRef, useState } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const clients = [
  { name: "BCA", logo: "BCA" },
  { name: "AEON Mall", logo: "AEON" },
  { name: "Unilever", logo: "UNILEVER" },
  { name: "KFC", logo: "KFC" },
  { name: "Huawei", logo: "HUAWEI" },
  { name: "Indomaret", logo: "INDOMARET" },
  { name: "Plaza Senayan", logo: "SENAYAN" },
  { name: "Erajaya", logo: "ERAJAYA" },
  { name: "Astra", logo: "ASTRA" },
  { name: "WIKA", logo: "WIKA" },
  { name: "MAP", logo: "MAP" },
  { name: "KawanLama", logo: "KAWANLAMA" },
];

const testimonials = [
  {
    id: 1,
    name: "Dian Rachmawati",
    role: "Owner Retail Store",
    avatar: "DR",
    rating: 5,
    title: "Toko saya langsung eye-catching",
    content: "Tim SignWorld sangat profesional. Dari proses desain sampai pemasangan, semuanya rapi dan cepat. Pelanggan jadi lebih mudah mengenali toko saya, bahkan dari jauh.",
  },
  {
    id: 2,
    name: "Andi Hermawan",
    role: "Restaurant Manager",
    avatar: "AH",
    rating: 5,
    title: "Huruf timbulnya tampil mewah banget",
    content: "SignWorld bantu banget bikin tampilan restoran kami jadi lebih premium. Bahan akrilik dan finishing-nya rapi. Hasil akhirnya jauh melebihi ekspektasi.",
  },
  {
    id: 3,
    name: "Novita Widjaja",
    role: "Salon Owner",
    avatar: "NW",
    rating: 5,
    title: "Komunikatif, cepat, dan hasilnya keren",
    content: "Saya cuma kasih brief singkat, dan mereka langsung ngerti arah branding-nya. Signage akrilik + LED yang dibuat bener-bener cocok sama konsep interior salon kami.",
  },
  {
    id: 4,
    name: "Tiara Lestari",
    role: "Marketing Manager",
    avatar: "TL",
    rating: 5,
    title: "Tim SignWorld tahu banget soal branding",
    content: "Kami pesan beberapa signage untuk booth pameran, hasilnya clean dan rapi. Bahkan detil kecil seperti pencahayaan dan posisi huruf ditangani dengan presisi.",
  },
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null!);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useGsapFadeIn(ref);

  return (
    <div ref={ref} className="relative bg-white">
      {/* Clients Logo Section */}
      <div className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-subheading mb-4 block">Dipercaya Oleh</span>
            <h2 className="text-heading text-primary mb-6">
              Puluhan Brand{" "}
              <span className="text-accent">Ternama</span> di Indonesia
            </h2>
            <p className="text-text-muted">
              Dari retail hingga korporasi, kami telah dipercaya untuk mengerjakan 
              berbagai proyek signage dan visual branding.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group bg-white p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <span className="font-display font-bold text-lg text-text-muted group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>

          {/* More clients indicator */}
          <div className="text-center mt-8">
            <span className="text-text-muted text-sm">
              Dan masih banyak lagi...
            </span>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Header & Rating */}
            <div className="lg:sticky lg:top-32">
              <span className="text-subheading mb-4 block">Ulasan & Rating</span>
              <h3 className="text-heading text-primary mb-6">
                Apa Kata{" "}
                <span className="text-accent">Klien Kami</span>
              </h3>
              
              {/* Overall Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="font-display text-6xl font-bold text-primary">4.9</div>
                <div>
                  <div className="stars mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-text-muted">dari 100+ ulasan klien</p>
                </div>
              </div>

              <p className="text-text-muted leading-relaxed mb-8">
                Kepuasan klien adalah prioritas utama kami. Setiap proyek dikerjakan 
                dengan dedikasi tinggi untuk hasil terbaik.
              </p>

              <a href="#contact" className="btn">
                Mulai Proyek Anda
              </a>
            </div>

            {/* Right: Testimonial Cards */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card cursor-pointer transition-all duration-300 ${
                    activeTestimonial === index ? "ring-2 ring-accent shadow-lg" : ""
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-text-light font-display font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-text-muted">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <h5 className="font-display font-bold text-lg text-primary mb-2">
                    "{testimonial.title}"
                  </h5>
                  <p className="text-text-muted leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary text-text-light py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Brand Terpercaya" },
              { number: "13+", label: "Tahun Pengalaman" },
              { number: "1000+", label: "Proyek Selesai" },
              { number: "24/7", label: "Support Tersedia" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-text-light/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Feed Preview */}
      <div className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-subheading mb-4 block">Ikuti Kami</span>
            <h3 className="text-heading text-primary mb-4">
              @signworld.id
            </h3>
            <p className="text-text-muted">
              Lihat update proyek terbaru dan inspirasi signage di Instagram kami
            </p>
          </div>

          {/* Instagram Grid Mock */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=300&fit=crop",
            ].map((src, index) => (
              <a
                key={index}
                href="https://instagram.com/signworld.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/signworld.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              </svg>
              Follow @signworld.id
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
