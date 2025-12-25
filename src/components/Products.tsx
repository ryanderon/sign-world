import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const materials = [
  { name: "Acrylic", desc: "Crystal clear" },
  { name: "Stainless Steel", desc: "Rust-proof elegance" },
  { name: "Galvanized", desc: "Strong & economical" },
  { name: "Aluminum", desc: "Light & modern" },
  { name: "PVC", desc: "Versatile & waterproof" },
  { name: "Brass", desc: "Timeless luxury" },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "No Minimum Order",
    desc: "From one piece to thousands",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Free Consultation",
    desc: "Expert guidance, always",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Nationwide Delivery",
    desc: "Safe arrival, guaranteed",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Flexible Payment",
    desc: "Cards, e-wallets, transfers",
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div className="relative bg-white" ref={ref}>
      {/* Header Section */}
      <div id="products" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-subheading mb-4 block">Materials</span>
              <h2 className="text-heading text-primary mb-6">
                Premium <span className="text-gradient">materials.</span>
              </h2>
              <p className="text-body-lg mb-8">
                We work with the finest materials to ensure durability, 
                aesthetics, and perfect fit for every environment.
              </p>
              
              {/* Materials Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {materials.map((material, index) => (
                  <div
                    key={material.name}
                    className="bg-surface p-4 rounded-xl border border-border hover:border-transparent hover:shadow-lg transition-all duration-300 group"
                    style={{ 
                      ['--hover-gradient' as string]: index % 3 === 0 
                        ? 'linear-gradient(135deg, rgba(0,180,180,0.1) 0%, rgba(59,130,246,0.1) 100%)'
                        : index % 3 === 1
                        ? 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(236,72,153,0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)'
                    }}
                  >
                    <p className="font-display font-semibold text-primary text-sm mb-0.5 group-hover:text-teal transition-colors">
                      {material.name}
                    </p>
                    <p className="text-xs text-text-muted">{material.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image with Stats */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&h=500&fit=crop"
                  alt="High Quality Signage"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-white/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">2+</p>
                    <p className="text-xs text-text-muted">Year Warranty</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">100%</p>
                    <p className="text-xs text-text-muted">Authentic</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-gradient">24/7</p>
                    <p className="text-xs text-text-muted">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center group">
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform"
                  style={{ 
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)'
                      : 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'
                  }}
                >
                  {benefit.icon}
                </div>
                <h4 className="font-display font-semibold text-white mb-1">{benefit.title}</h4>
                <p className="text-white/60 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready-Made Products */}
      <div className="py-20 md:py-28 bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="img-reveal aspect-4/3">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                    alt="Signage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="img-reveal aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=400&fit=crop"
                    alt="Signage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="img-reveal aspect-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&h=500&fit=crop"
                    alt="Signage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-subheading mb-4 block">Ready to Order</span>
              <h3 className="text-heading text-primary mb-6">
                Acrylic signs. <span className="text-gradient-warm">Ready now.</span>
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Need office signs, door plates, or wayfinding solutions? 
                Browse our collection of ready-made premium acrylic signage.
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  "Custom design on request",
                  "Choose any size or color",
                  "Ready-to-use templates available",
                  "Fast production, premium quality",
                ].map((feature, index) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ 
                        background: index % 2 === 0 
                          ? 'linear-gradient(135deg, rgba(0,180,180,0.15) 0%, rgba(59,130,246,0.15) 100%)'
                          : 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.15) 100%)'
                      }}
                    >
                      <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn">
                View Catalog
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
