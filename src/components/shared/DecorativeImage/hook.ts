import { useEffect, useRef, useState } from "react";

const useDecorativeImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxY, setBoxY] = useState(0);

  useEffect(() => {
    const currentRef = containerRef.current;
    const handleScroll = () => {
      if (currentRef) {
        const scrollY = window.scrollY;
        const newY = Math.max(0, Math.min(scrollY * 0.5, 100));
        setBoxY(newY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    boxY,
    containerRef
  };
};

export default useDecorativeImage;
