import { useRef, useState } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const clients = [
  { name: "BCA", logo: "BCA" },
  { name: "AEON Mall", logo: "AEON" },
  { name: "Unilever", logo: "UNILEVER" },
  { name: "KFC Indonesia", logo: "KFC" },
  { name: "Huawei", logo: "HUAWEI" },
  { name: "Indomaret", logo: "INDOMARET" },
  { name: "Plaza Senayan", logo: "SENAYAN" },
  { name: "Erajaya Group", logo: "ERAJAYA" },
  { name: "Astra International", logo: "ASTRA" },
  { name: "WIKA", logo: "WIKA" },
  { name: "MAP Group", logo: "MAP" },
  { name: "KawanLama", logo: "KAWANLAMA" },
];

const testimonials = [
  {
    id: 1,
    name: "Dian Rachmawati",
    role: "Brand Manager, PT. Retail Nusantara",
    avatar: "DR",
    rating: 5,
    title: "Exceeded every expectation",
    content: "Professional, responsive, and detail-oriented. They delivered signage for 50+ outlets on time with consistent quality. A true partner.",
  },
  {
    id: 2,
    name: "Andi Hermawan",
    role: "Facility Manager, Hotel Grand Pacific",
    avatar: "AH",
    rating: 5,
    title: "Hospitality-grade excellence",
    content: "They understand luxury standards. Our stainless steel lobby signage is stunning—minimal maintenance, maximum impact.",
  },
  {
    id: 3,
    name: "Novita Widjaja",
    role: "Marketing Director, PT. Mitra Teknologi",
    avatar: "NW",
    rating: 5,
    title: "Complete branding solution",
    content: "From lobby signs to wayfinding—they handled our entire new office. The result perfectly reflects our corporate identity.",
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Operations Director, Fast Food Chain",
    avatar: "BS",
    rating: 5,
    title: "Reliable at scale",
    content: "Three years, 100+ outlets nationwide. Consistent quality, reliable delivery. They're our go-to signage partner.",
  },
];

const stats = [
  { number: "100+", label: "Trusted Brands" },
  { number: "13+", label: "Years Experience" },
  { number: "1000+", label: "Projects Done" },
  { number: "24/7", label: "Support Ready" },
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null!);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useGsapFadeIn(ref);

  return (
    <div ref={ref} className="relative bg-white">
      {/* Clients Logo Section */}
      <div id="clients" className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="text-subheading">Our Clients</span>
            <h2 className="text-heading text-primary">
              Trusted by <span className="text-gradient">leaders.</span>
            </h2>
            <p>From retail giants to corporate headquarters</p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div key={client.name} className="client-logo hover:bg-white">
                <span className="font-display font-bold text-sm md:text-base text-text-dim group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>

          {/* More clients indicator */}
          <div className="text-center mt-8">
            <span className="text-text-muted text-sm">
              And many more across diverse industries...
            </span>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Header & Rating */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <span className="text-subheading mb-4 block">Testimonials</span>
              <h3 className="text-heading text-primary mb-6">
                Client <span className="text-gradient-warm">love.</span>
              </h3>
              
              {/* Overall Rating */}
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(0,180,180,0.08) 0%, rgba(59,130,246,0.08) 100%)' }}>
                <div className="font-display text-5xl font-bold text-gradient">4.9</div>
                <div>
                  <div className="stars mb-1 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-text-muted">from 100+ client reviews</p>
                </div>
              </div>

              <p className="text-text-muted leading-relaxed mb-8">
                Client satisfaction is our north star. Every project, 
                every detail—crafted for excellence.
              </p>

              <a href="#contact" className="btn">
                Start Your Project
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: Testimonial Cards */}
            <div className="lg:col-span-3 space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card cursor-pointer transition-all ${
                    activeTestimonial === index 
                      ? "ring-2 ring-teal border-transparent shadow-lg" 
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-bold text-sm"
                        style={{ 
                          background: index % 2 === 0 
                            ? 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)'
                            : 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-primary text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-text-muted">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <h5 className="font-display font-semibold text-primary mb-2">
                    "{testimonial.title}"
                  </h5>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p 
                  className="font-display text-4xl md:text-5xl font-bold mb-2"
                  style={{ 
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)'
                      : 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
