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
  } = props;
  
  const { getImagePosition } = useHomeCard(props)
  
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