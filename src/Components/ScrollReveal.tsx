"use client";
import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale";
  delay?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const base =
    variant === "left"
      ? "reveal-left"
      : variant === "scale"
      ? "reveal-scale"
      : "reveal";

  return (
    <div ref={ref} className={`${base} ${className}`}>
      {children}
    </div>
  );
}