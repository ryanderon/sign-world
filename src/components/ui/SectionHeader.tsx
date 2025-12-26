import type { ReactNode } from "react";

interface SectionHeaderProps {
  subheading?: string;
  heading: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeader({ 
  subheading, 
  heading, 
  description,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`}>
      {subheading && <span className="text-subheading">{subheading}</span>}
      <h2 className="text-heading text-primary">{heading}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

