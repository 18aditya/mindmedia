'use client';

import Image from 'next/image';
import Link from 'next/link';
import useHomeCard from './hook';
import { HomeCardProps } from './type';

export default function HomeCard(props: HomeCardProps) {
  const {
    title,
    imageUrl,
    link,
    description,
    isHoveredCard,
    hoveredImage,
    variant = 'default'
  } = props;
  
  const { getImagePosition } = useHomeCard(props)
  
  if (variant === 'gradient') {
    return (
      <div className="swiper-slide border border-[#d8d8d8] relative">
        <div className="aspect-[.7] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} - Hotel Indigo Bali Seminyak Beach`}
            width={2000}
            height={800}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="py-[20px] px-[15px] h-full flex flex-col justify-end absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
          <p className="font-primary font-medium uppercase text-white leading-[120%] mb-2">{title}</p>
          <p className="font-primary font-medium text-[.8rem] text-white leading-[120%]">{description}</p>
          <div>
            <Link
              href={link}
              className="bg-primary-500 text-white text-[.7rem] sm:text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[10px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link}
      className="w-full md:w-[calc(100%/4)] image-box group mb-6 md:mb-0"
    >
      <div 
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[560px] overflow-hidden relative rounded-lg hover:scale-[1.02] transition-transform duration-300"
      >
        <div className="w-full h-full overflow-hidden">
          <Image
            src={isHoveredCard ? imageUrl : (hoveredImage || imageUrl)}
            alt={`Accommodation - ${title}`}
            width={2000}
            height={800}
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${getImagePosition()}`}
            loading="lazy"
          />
        </div>
        <div className="absolute hidden md:block bottom-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <div className="h-[2px] w-0 group-hover:w-12 bg-white transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
} 