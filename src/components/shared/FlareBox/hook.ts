import { useEffect, useRef, useState } from "react";

const useFlareBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progress = entry.intersectionRatio;
          // Smoother animation by using requestAnimationFrame
          requestAnimationFrame(() => {
            const newScale = 1 + progress;
            setScale(newScale);
          });
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return {
    containerRef,
    scale
  }
}

export default useFlareBox
