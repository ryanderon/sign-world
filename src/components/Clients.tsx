import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

const clients = [
  // Row 1 - Major Brands
  {
    name: "Agung Sedayu Group",
    image:
      "https://upload.wikimedia.org/wikipedia/id/8/88/Screenshot_20231031_155650_Chrome_Beta.jpg",
  },
  { name: "AEON Mall", image: "data:image/png;base64,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" },
  { name: "Plaza Senayan", image: "/clients/plaza-senayan.png" },
  { name: "Erajaya", image: "/clients/erajaya.png" },
  { name: "Sarinah", image: "/clients/sarinah.png" },
  { name: "BCA", image: "/clients/bca.png" },
  // Row 2
  { name: "Astra Life", image: "/clients/astra-life.png" },
  { name: "WIKA", image: "/clients/wika.png" },
  { name: "MAP", image: "/clients/map.png" },
  { name: "Unilever", image: "/clients/unilever.png" },
  { name: "KawanLama Group", image: "/clients/kawanlama-group.png" },
  { name: "Gunung Sewu", image: "/clients/gunung-sewu.png" },
  // Row 3
  { name: "Indomaret", image: "/clients/indomaret.png" },
  { name: "Huawei", image: "/clients/huawei.png" },
  { name: "KFC", image: "/clients/kfc.png" },
  { name: "Mitsubishi Electric", image: "/clients/mitsubishi-electric.png" },
  { name: "Costa Cruises", image: "/clients/costa-cruises.png" },
  { name: "Scuto", image: "/clients/scuto.png" },
  // Row 4
  { name: "Bank Artha Graha", image: "/clients/bank-artha-graha.png" },
  { name: "Pigeon", image: "/clients/pigeon.png" },
  { name: "Idemitsu", image: "/clients/idemitsu.png" },
  { name: "Diamond", image: "/clients/diamond.png" },
  { name: "Supreme", image: "/clients/supreme.png" },
  { name: "UBM", image: "/clients/ubm.png" },
  // Row 5
  {
    name: "Hong Kong Tourism Board",
    image: "/clients/hong-kong-tourism-board.png",
  },
  { name: "Tory Burch", image: "/clients/tory-burch.png" },
  { name: "Marugame Udon", image: "/clients/marugame-udon.png" },
  {
    name: "The Gunawarman Jakarta",
    image: "/clients/the-gunawarman-jakarta.png",
  },
  {
    name: "2018 Indonesia ParaGames",
    image: "/clients/2018-indonesia-paragames.png",
  },
  { name: "And Many More", image: "" },
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-subheading mb-6">Trusted By</p>
          <h2 className="text-heading mb-6">
            Powering brands across{" "}
            <span className="italic text-secondary">industries</span>
          </h2>
          <p className="text-body-lg">
            From retail giants to international events, we've partnered with
            leading organizations to bring their vision to life.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="bg-background p-6 md:p-8 hover:bg-surface transition-colors duration-300 group min-h-[100px]"
            >
              <img
                src={client.image}
                alt={client.name}
                className="max-h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />

              <span
                className={`text-sm text-center font-medium tracking-wide transition-colors duration-300 ${
                  index === clients.length - 1
                    ? "text-secondary"
                    : "text-text-muted group-hover:text-primary"
                }`}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial / Trust Badge */}
        <div className="mt-20 p-12 md:p-16 bg-surface border border-border text-center">
          <svg
            className="w-12 h-12 text-secondary/30 mx-auto mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="font-display text-2xl md:text-3xl text-primary leading-relaxed max-w-3xl mx-auto mb-8">
            "We understand every project is different, and has its own
            pressures. Deadlines can be tight. Colours need to match. Projects
            can have small budgets but need big results."
          </p>

          <div className="divider mx-auto mb-6" />

          <p className="text-text-muted">Our commitment since 2011</p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "100+", label: "Trusted Clients" },
            { number: "13+", label: "Years Experience" },
            { number: "4", label: "Core Services" },
            { number: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl font-medium text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-text-muted tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
