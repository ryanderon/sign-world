import { useRef } from "react";
import { useGsapFadeIn } from "../hooks/useGsapFadeIn";

export default function About() {
  const ref = useRef<HTMLDivElement>(null!);
  useGsapFadeIn(ref);

  return (
    <div className="container" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <div className="order-2 lg:order-1 relative">
          <div className="img-reveal">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop"
              alt="SignWorld workspace"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          {/* Floating accent */}
          <div className="hidden lg:block absolute -right-8 -bottom-8 w-48 h-48 bg-surface-alt border border-border p-6">
            <p className="font-display text-6xl font-medium text-secondary">13+</p>
            <p className="text-sm text-text-muted mt-2">Years of Excellence</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2">
          <p className="text-subheading mb-6">About Us</p>
          
          <h2 className="text-heading mb-8">
            Your trusted partner for{" "}
            <span className="italic text-secondary">quality printing</span>
          </h2>

          <div className="space-y-6 text-body-lg">
            <p>
              Since 2011, we have strived to offer the highest quality printed 
              products in the marketplace. We understand every project is different, 
              and has its own pressures.
            </p>
            <p>
              Our team has extensive experience working on projects ranging in 
              scale and complexity, and we pride ourselves on ensuring your 
              project runs as smoothly as possible.
            </p>
            <p className="text-primary font-medium">
              If you think something isn't possible due to time, budget, size, 
              material or finish — let us see what we can do.
            </p>
          </div>

          <div className="divider my-10" />

          {/* Values */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: "Deadline Focused", desc: "Meeting deadlines is as important as output quality" },
              { title: "Color Accuracy", desc: "Pantone matching system for precise color control" },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-body font-semibold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn mt-10 inline-flex">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}
