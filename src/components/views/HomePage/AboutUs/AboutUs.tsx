'use client'
import DecorativeImage from '@/components/shared/DecorativeImage';
import useDecorativeImage from '@/components/shared/DecorativeImage/hook';

export default function AboutUs() {
  const { boxY,containerRef } = useDecorativeImage();

  return (
    <section ref={containerRef} id="home-intro" className="py-[3rem] sm:py-[6rem]">
      <div className="container mx-auto flex flex-col md:flex lg:grid lg:grid-cols-3">
        <div className="flex flex-col md:flex lg:grid lg:grid-cols-2 items-center col-span-2">
          <div>
            <h1 className="text-primary-500 hidden sm:hidden md:hidden lg:block text-[1.3rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem] leading-[1.3em] md:text-center lg:text-left font-primary font-light text-primary uppercase md:pb-[30px] lg:pb-0 lg:pr-2">
              The First 5-star<br />
              Hotel Indigo<br />
              In A Resort Location
            </h1>
            <h1 className="text-primary-500 block sm:block md:block lg:hidden text-[1.4rem] mb-[30px] leading-[1.3em] text-center font-primary font-light text-primary uppercase sm:pr-2">
              The First 5-star<br />
              Hotel Indigo<br />
              In A Resort<br />
              Location
            </h1>
          </div>
          <DecorativeImage boxY={boxY.toString()} />
        </div>
        <div className="font-primary mt-[100px] sm:mt-0 sm:pl-[100px] md:pl-[0px] lg:pl-[100px] pt-0 md:pt-[80px] lg:pt-0">
          <h2 className="text-primary-500 text-[1.4rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2.2rem] leading-[1.3] uppercase font-light text-center md:text-center lg:text-left">
            About Us & Our Neighborhood
          </h2>
          <p className="mt-[20px] text-primary-500 font-light text-[.9rem] text-body text-center lg:text-left">
            Hotel Indigo Bali Seminyak Beach is situated in the heart of one of Bali's most vibrant districts, a place where centuries of tradition and culture blend seamlessly with an atmosphere of casual sophistication.
          </p>
          <div className="mt-[20px] flex md:flex justify-center lg:inline-block">
            <a 
              href="/about-us"
              className="bg-primary-500 text-white text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}