import { useEffect, useRef, useState } from "react";
import homeData from '@/data/home.json';
import { AccommodationItem } from "./type";

const useAccommodationGallery = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    
    const accommodations: AccommodationItem[] = homeData.accommodations;

    useEffect(() => {
        const checkIfDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Initial check
        checkIfDesktop();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfDesktop);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfDesktop);
    }, []);

    const hoveredImage = hoveredId && isDesktop
        ? accommodations.find(item => item.id === hoveredId)?.imageUrl || null
        : null;


        const getCardPosition = (index: number, total: number): 'left' | 'center-left' | 'center-right' | 'right' => {
            if (total === 1) return 'center-left';
            if (total === 2) return index === 0 ? 'left' : 'right';
            if (total === 3) {
                if (index === 0) return 'left';
                if (index === 1) return 'center-left';
                return 'right';
            }
            if (index === 0) return 'left';
            if (index === 1) return 'center-left';
            if (index === 2) return 'center-right';
            return 'right';
        };


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? accommodations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === accommodations.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

    return {
        accommodations,
        getCardPosition,
        hoveredImage,
        setHoveredId,
        isDesktop,
        hoveredId,
        carouselRef,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        currentIndex,
        handlePrev,
        handleNext,
    }
}

export default useAccommodationGallery;