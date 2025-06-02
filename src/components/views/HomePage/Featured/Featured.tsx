import { spacing } from '@/lib/constants';
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from 'next/image';
import { GalleryGrid } from '@/components/shared/GalleryGrid/GalleryGrid';
import { cn } from '@/lib/utils';
import { galleryCards } from './constants';
import FlareBox from '@/components/shared/FlareBox';

export default function Featured() {
  return (
    <section id='eventsScheduled' className={cn(`${spacing.section} relative`)}>
         <FlareBox className='h-[1000px] -top-[37rem]'/>
      <div className={cn(`${spacing.container} hidden md:block relative z-[1]`)}>
        <AnimatedSection className="rounded-lg p-4 sm:p-6 ">
          {/* Mobile Gallery Grid */}
          <div className="block md:hidden">
            <GalleryGrid cards={galleryCards} />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block py-14">
            <div className="flex flex-col sm:grid grid-cols-2 items-center relative z-[2]">
              <div className="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden rounded-bl-[100px] lg:rounded-bl-[150px]">
                <Image
                  src="/images/events/main-dining.png"
                  alt="Dining - Hotel Indigo Seminyak"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
              <div className="font-primary font-light sm:px-[50px] mt-[20px] sm:mt-0">
                <h2 className="text-primary-500 text-[1.4rem] md:text-[2rem] lg:text-[2.2rem] uppercase pb-5 text-center sm:text-left">Dining</h2>
                <p className="text-body text-primary-500 text-[.9rem] text-center sm:text-left">Our unique food and beverage concept is inspired by the vibrant neighborhood we inhabit—a melting pot of flavors from around the world, while still strongly influenced by local culinary traditions.</p>
                <div className="mt-[5px] sm:mt-[20px] flex justify-center sm:block">
                  <a
                    className="bg-primary-500 text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] md:mt-0 lg:mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
                    href="/en/dining"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-[15px] mt-12">
              <div className="lg:w-[30%] block sm:block md:flex lg:block gap-[20px] md:mt-[50px] lg:mt-0">
                <div>
                  <div className="w-full obeject-[16/9] overflow-hidden block md:block lg:hidden rounded-bl-[100px] md:rounded-bl-none lg:rounded-bl-none">
                    <Image
                      src="/images/events/main-wedding.png"
                      alt="Wedding - Hotel Indigo Seminyak"
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="font-primary font-light mt-[20px]">
                    <h2 className="text-primary-500 text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2.2rem] uppercase pb-5 text-center lg:text-left">Wedding</h2>
                    <p className="text-body text-primary-500 text-[.9rem] sm:text-[.8] lg:text-[.8rem] xl:text-[.9rem] text-center lg:text-left">Celebrate your love in the heart of Bali's most vibrant beachside spot at Hotel Indigo Bali Seminyak Beach.</p>
                    <div className="mt-[5px] sm:mt-[20px] flex justify-center md:flex lg:block">
                      <a
                        className="bg-primary-500 text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
                        href="/en/wedding"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px] md:mt-0">
                  <div className="w-full obeject-[16/9] overflow-hidden block md:block lg:hidden rounded-bl-[100px] md:rounded-bl-none lg:rounded-bl-none">
                    <Image
                      src="/images/events/main-events.png"
                      alt="Events - Hotel Indigo Seminyak"
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="font-primary font-light mt-[20px] md:mt-[20px] lg:mt-[40px]">
                    <h2 className="text-primary-500 text-[1.4rem] sm:text-[1.5rem] lg:text-[1.7rem] xl:text-[2.2rem] uppercase pb-5 text-center lg:text-left">Events</h2>
                    <p className="text-body text-primary-500 text-[.9rem] sm:text-[.8] lg:text-[.8rem] xl:text-[.9rem] text-center lg:text-left">Leave it to us to keep your guests refreshed with themed break selections served in our unique breakout room or under the Balinese skies on our pre-function lawn.</p>
                    <div className="mt-[5px] sm:mt-[20px] flex justify-center md:flex lg:block">
                      <a
                        className="bg-primary-500 text-white text-[.6rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
                        href="/en/meeting"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[70%] hidden sm:hidden md:hidden lg:flex gap-[30px]">
                <div className="h-[500px] overflow-hidden">
                  <Image
                    src="/images/events/main-wedding.png"
                    alt="Wedding - Hotel Indigo Seminyak"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-[500px] overflow-hidden rounded-br-[150px]">
                  <Image
                    src="/images/events/main-events.png"
                    alt="Events - Hotel Indigo Seminyak"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className='block md:hidden'>
        <GalleryGrid cards={galleryCards} />
      </div>
    </section>
  );
}