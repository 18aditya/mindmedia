import { useEffect, useRef, useState } from "react";

const useDecorativeImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxY, setBoxY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progress = entry.intersectionRatio;
          const maxDistance = window.innerWidth < 640 ? 100 :window.innerWidth < 768 ? 170 : window.innerWidth < 1400 ? 120 : 250;
          const newY = maxDistance * progress;
          setBoxY(newY);
        }
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: '20px 0px'
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
    boxY
  }
}

export default useDecorativeImage
