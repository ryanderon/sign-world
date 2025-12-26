import type { ReactNode } from "react";

type GradientVariant = "teal-blue" | "orange-pink" | "purple-pink" | "green";

interface GradientIconProps {
  children: ReactNode;
  variant?: GradientVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const gradients: Record<GradientVariant, string> = {
  "teal-blue": "linear-gradient(135deg, #00b4b4 0%, #3b82f6 100%)",
  "orange-pink": "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
  "purple-pink": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  "green": "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
};

const sizes = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

export default function GradientIcon({ 
  children, 
  variant = "teal-blue",
  size = "md",
  className = ""
}: GradientIconProps) {
  return (
    <div 
      className={`${sizes[size]} rounded-xl flex items-center justify-center text-white ${className}`}
      style={{ background: gradients[variant] }}
    >
      {children}
    </div>
  );
}

