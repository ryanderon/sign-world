import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const services = [
  {
    id: "custom-signage",
    title: "Custom Signage",
    tagline: "Dirancang Khusus",
    desc: "Kami merancang signage secara personal sesuai kebutuhan dan karakter bisnis Anda. Bukan template pasaran, tapi desain eksklusif untuk brand Anda.",
    image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=800&fit=crop",
    features: ["Desain Eksklusif", "Material Premium", "Konsultasi Gratis"],
  },
  {
    id: "huruf-timbul",
    title: "Huruf Timbul",
    tagline: "3D Lettering Premium",
    desc: "Tampilan nama brand Anda akan terlihat lebih berkelas dengan huruf timbul yang dibuat presisi dengan berbagai pilihan material.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
    features: ["Stainless Steel", "Akrilik", "Kuningan & Tembaga"],
  },
  {
    id: "signage-akrilik",
    title: "Signage Akrilik",
    tagline: "Modern & Minimalis",
    desc: "Signage berbahan akrilik adalah solusi visual yang modern dan minimalis. Cocok untuk berbagai kebutuhan interior dan eksterior.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    features: ["Anti UV", "Tahan Lama", "Desain Elegan"],
  },
  {
    id: "visual-branding",
    title: "Visual Branding",
    tagline: "Identitas Visual Lengkap",
    desc: "Kami menyediakan berbagai elemen branding visual untuk memperkuat identitas visual bisnis Anda secara menyeluruh.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=800&fit=crop",
    features: ["Logo Display", "Wall Graphics", "Booth Exhibition"],
  },
  {
    id: "neon-box",
    title: "Neon Box",
    tagline: "Eye-Catching Display",
    desc: "Neon box kami hadir dengan berbagai pilihan bentuk, warna lampu, dan teknik pencahayaan untuk menarik perhatian pelanggan.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=800&fit=crop",
    features: ["LED Hemat Energi", "Tahan Cuaca", "Custom Size"],
  },
  {
    id: "display-akrilik",
    title: "Display Akrilik",
    tagline: "Solusi Display Modern",
    desc: "Solusi display modern dan elegan untuk memperkuat tampilan produk maupun pesan brand Anda di berbagai lokasi.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop",
    features: ["Retail Display", "Menu Board", "Information Stand"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Konsultasi & Brief Visual",
    desc: "Kami memulai setiap proyek dengan memahami kebutuhan visual bisnis Anda. Kirim brief atau jelaskan visi Anda.",
  },
  {
    step: "02",
    title: "Desain & Persiapan",
    desc: "Tim desain kami menyusun tampilan signage lengkap dengan mockup dan revisi hingga Anda puas.",
  },
  {
    step: "03",
    title: "Produksi & Finalisasi",
    desc: "Material pilihan dan teknologi modern untuk hasil berkualitas tinggi. Setiap detail dikontrol dengan presisi.",
  },
];

const stats = [
  { value: "50+", label: "Jenis Material" },
  { value: "100+", label: "Proyek Selesai" },
  { value: "∞", label: "Kemungkinan Desain" },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div ref={ref} className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-cream py-20 md:py-28">
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <span className="text-subheading mb-4 block">Layanan Kami</span>
              <h2 className="text-heading text-primary mb-6">
                Spesialis Signage dan{" "}
                <span className="text-accent">Visual Branding</span> Custom
                </h2>
              <p className="text-body-lg mb-8 max-w-xl">
                Kami menyediakan berbagai layanan signage dan elemen visual yang 
                dirancang khusus untuk memperkuat identitas brand Anda. Semua produk 
                dapat disesuaikan secara fleksibel.
              </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn">
                  Hubungi Sekarang
                </a>
                <a href="#process" className="btn-outline">
                  Lihat Proses Kerja
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
                className="service-card group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Tagline badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                        {service.tagline}
                      </span>
                  </div>
                    </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-surface rounded-md text-text-muted"
                      >
                        {feature}
                      </span>
                      ))}
                    </div>

                  {/* CTA Link */}
                    <a
                      href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors"
                  >
                    Cari Tahu
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-primary text-text-light py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-light/60 mb-4 block">
                Mengapa Memilih Kami
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Karena Brand Anda Layak untuk{" "}
                <span className="text-accent-light">Lebih Terlihat</span>
              </h3>
              <p className="text-text-light/70 text-lg leading-relaxed mb-8">
                Solusi lengkap signage dan branding visual — dari desain hingga 
                produksi, semua kami tangani dengan presisi dan kualitas tinggi.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "🎨",
                    title: "Kustomisasi Signage",
                    desc: "Dirancang khusus sesuai karakter brand Anda, bukan template pasaran.",
                  },
                  {
                    icon: "⚙️",
                    title: "Produksi Profesional",
                    desc: "Dikerjakan dengan teknologi modern untuk kualitas hasil maksimal.",
                  },
                  {
                    icon: "✓",
                    title: "Garansi Kualitas",
                    desc: "Setiap produk melalui quality control ketat sebelum pengiriman.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-text-light/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
      <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=800&fit=crop"
                  alt="Professional Signage Work"
                  className="w-full h-full object-cover"
                />
          </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold">4.9/5</span>
                </div>
                <p className="text-sm text-text-muted">
                  "Tim SignWorld sangat profesional. Dari desain sampai pemasangan, semuanya rapi."
                </p>
                <p className="text-xs text-text-dim mt-2">— Dian R., Owner Retail Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-subheading mb-4 block">Proses Kerja Kami</span>
            <h3 className="text-heading text-primary mb-6">
              Dari Konsep hingga{" "}
              <span className="text-accent">Produk Siap Tampil</span>
            </h3>
            <p className="text-text-muted">
              Proses kerja yang terstruktur untuk memastikan hasil maksimal sesuai ekspektasi Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((item, index) => (
                <div
                  key={item.step}
                className="relative bg-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step number */}
                <div className="step-number mb-6">{item.step}</div>
                
                <h4 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>

                {/* Connector arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  )}
                </div>
              ))}
            </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="#contact" className="btn">
              Mulai Proyek Anda
            </a>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-white py-20">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-secondary p-12 md:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-text-light mb-4">
                  Punya proyek unik dalam pikiran?
            </h3>
                <p className="text-text-light/70 text-lg">
                  Tim kami siap membantu mewujudkan ide Anda menjadi signage berkualitas tinggi.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="#contact" className="btn-accent">
                  Dapatkan Penawaran Gratis
                </a>
                <a href="tel:+6282261617724" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hubungi Kami
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
