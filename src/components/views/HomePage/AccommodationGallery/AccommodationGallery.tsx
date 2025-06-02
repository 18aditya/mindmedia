'use client'
import HomeCard from './HomeCard/HomeCard';
import { spacing } from '@/lib/constants';
import useAccommodationGallery from './hook';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AccommodationGallery() {


  const {
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
  } = useAccommodationGallery();


  return (
    <section className={spacing.section}>
      <div className={cn(`${spacing.container} relative z-20 my-14`)}>
        <div className="w-full">
          <div className="mb-12 animate-fade-in">
            <h2 className="uppercase text-3xl md:text-4xl text-gray-900 mb-4 text-primary-500">Accommodations</h2>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {accommodations.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <a
                      href={item.link}
                      className="block border border-[#d8d8d8]"
                    >
                      <div className="aspect-[1.5] w-full overflow-hidden">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={400}
                          height={267}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-primary uppercase text-center text-sm">{item.title}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-600">
              <button onClick={handlePrev} className="hover:text-primary-500 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span>
                {currentIndex + 1}/{accommodations.length}
              </span>
              <button onClick={handleNext} className="hover:text-primary-500 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Desktop Flex Layout */}
          <div
            id="imageContainer"
            className="hidden md:flex md:flex-row md:gap-[20px] lg:gap-[40px] hover:gap-[5px] transition-all duration-300"
          >
            {accommodations.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => isDesktop && setHoveredId(item.id)}
                onMouseLeave={() => isDesktop && setHoveredId(null)}
              >
                <HomeCard
                  {...item}
                  isHoveredCard={hoveredId === item.id}
                  hoveredImage={hoveredImage}
                  position={getCardPosition(index, accommodations.length)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 