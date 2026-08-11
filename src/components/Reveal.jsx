import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  duration = 650,
  className = "",
  withScale = false,
  scaleFrom = 1.05,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    const handleChange = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener?.("change", handleChange);

    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const transitionStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  const hiddenStyle = {
    opacity: 0,
    transform: withScale ? `translateY(1.5rem) scale(${scaleFrom})` : "translateY(1.5rem)",
  };

  const visibleStyle = {
    opacity: 1,
    transform: withScale ? "translateY(0) scale(1)" : "translateY(0)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={prefersReducedMotion || isVisible ? { ...transitionStyle, ...visibleStyle } : { ...transitionStyle, ...hiddenStyle }}
    >
      {children}
    </div>
  );
}
