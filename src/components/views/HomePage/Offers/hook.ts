import type { Swiper } from 'swiper/types';
import { useState, useRef } from 'react';

export default function useOffers() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const swiperRef = useRef<Swiper>(null);

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handleSwiper = (swiper: Swiper) => {
        swiperRef.current = swiper;
    };


    return {
        currentSlide,
        setCurrentSlide,
        swiperRef,
        handlePrev,
        handleNext,
        handleSwiper
    };
} 