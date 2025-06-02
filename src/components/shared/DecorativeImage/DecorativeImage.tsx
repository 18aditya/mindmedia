'use client'
import Image from 'next/image';
import { DecorativeImageProps } from './type';

const DecorativeImage = ({boxY}:DecorativeImageProps) => {
    
    return(
        <div className="relative">
        <div
          className="relative z-10 animate-zoom-in "
        >
          <Image
            src="/images/accommodation/banner.webp"
            alt="Hotel Indigo - Bali Seminyak Beach"
            width={600}
            height={800}
            className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-[60%] sm:w-full rounded-tl-[100px] sm:rounded-tl-[150px] lg:rounded-tl-[150px] xl:rounded-tl-[200px] object-cover ml-6 sm:ml-0 shadow-lg"
          />
        </div>
        <div
          style={{ transform: `translateY(${boxY}px)` }}
          className="absolute z-0 w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary-500 right-[100px] sm:-right-[50px] top-0 sm:top-0 mr-6 sm:mr-0 shadow-xl animate-fade-in"
        />
      </div>
    )
}

export default DecorativeImage;