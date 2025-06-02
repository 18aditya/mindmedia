"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cardContent } from "./constants";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { spacing } from "@/lib/constants";
import FlareBox from "@/components/shared/FlareBox";
import HomeCard from "@/components/shared/HomeCard/page";
import useOffers from "./hook";

const Offers = () => {
    const {
        currentSlide,
        setCurrentSlide,
        handlePrev,
        handleNext,
        handleSwiper
    } = useOffers();

    return (
        <section className="relative py-20">
            <FlareBox className="left-0 h-[250px]" />
            <div className={cn(`${spacing.container} mb-12 animate-fade-in`)}>
                <h2 className="uppercase text-3xl md:text-4xl text-gray-900 mb-4 text-primary-500">Offers</h2>
            </div>

            {/* Mobile Version */}
            <div className="sm:hidden relative max-w-[1400px] mx-auto px-4">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    centeredSlides={true}
                    className="mySwiperOffersMobile"
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                    onSwiper={handleSwiper}
                >
                    {cardContent.map((dt, index) => (
                        <SwiperSlide key={index}>
                            <HomeCard
                                title={dt.title}
                                imageUrl={dt.thumbnail}
                                link="/en/dining"
                                description={dt.description}
                                position="center-left"
                                variant="gradient"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop Version */}
            <div className="hidden sm:block relative max-w-[1400px] mx-auto px-4">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev-facility",
                        nextEl: ".next-facility",
                    }}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={40}
                    className="mySwiperHomeActivities"
                >
                    {cardContent.map((dt, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="md:flex flex-col gap-[50px] lg:grid grid-cols-2 items-center relative z-[2] max-w-[1200px] mx-auto">
                                <div className="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden rounded-tr-[100px] lg:rounded-tr-[150px]">
                                    <Image
                                        src={dt.thumbnail}
                                        alt={dt.alt}
                                        width={1280}
                                        height={720}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="font-primary font-light sm:px-[50px] mt-[20px] md:mt-0">
                                    <span className="uppercase text-[#A26928] font-medium text-center md:text-center lg:text-left block">Exclusive offer</span>
                                    <h2 className="uppercase font-medium text-[1.2rem] md:text-[1.7rem] lg:text-[1.7rem] xl:text-[2.2rem] leading-[130%] text-primary-500 text-center md:text-center lg:text-left">{dt.title}</h2>
                                    <p className="text-body mt-[20px] text-primary-500 text-[.9rem] text-center lg:text-left">{dt.description}</p>
                                    <div className="mt-[5px] sm:mt-[20px] flex justify-center items-center w-full lg:block">
                                        <a
                                            className="bg-primary-500 text-white text-[.7rem] sm:text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] md:mt-0 lg:mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
                                            href="/en/dining"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <span className="swiper-button-prev prev-facility !h-[30px] !w-[30px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] after:!content-[unset] !left-[4vw] sm:!left-[4vw] !top-[25%] sm:!top-[50%]">
                        <ChevronLeft className="h-5 w-5 text-white" />
                    </span>
                    <span className="swiper-button-next next-facility !h-[30px] !w-[30px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] after:!content-[unset] !right-[4vw] sm:!right-[4vw] !top-[25%] sm:!top-[50%]">
                        <ChevronRight className="h-5 w-5 text-white" />
                    </span>
                </Swiper>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-600">
                <button onClick={handlePrev} className="hover:text-primary-500 transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <span>
                    {currentSlide}/{cardContent.length}
                </span>
                <button onClick={handleNext} className="hover:text-primary-500 transition-colors">
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
};

export default Offers;