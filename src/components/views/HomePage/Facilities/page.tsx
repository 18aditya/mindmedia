"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { spacing } from "@/lib/constants";
import FlareBox from "@/components/shared/FlareBox";
import Image from "next/image";

const facilities = [
    {
        title: "Sava Spa",
        description: "Crowned as The Best Spa in 5 star Resort in Indonesia, Sava Spa offers the uncomplicated indulgence of head to toe experience.",
        image: "https://seminyak.hotelindigo.com/cms/storage/app/uploads/public/682/bfa/fd7/682bfafd70a94413361704.webp",
        link: "/en/facilities/sava-spa"
    },
    {
        title: "Wellness & Activities",
        description: "Balancing your holiday with a curated wellness and vibrant activities, inspired by the neighborhood of Seminyak, we invite you to join the series of activities available daily within our resort and around the neighborhood.",
        image: "https://seminyak.hotelindigo.com/cms/storage/app/uploads/public/682/c3c/a66/682c3ca66d923300545049.webp",
        link: "/en/facilities/wellness-activities"
    },
    {
        title: "24/7 Gym",
        description: "Our workout space features TRX suspension training equipment, free weights, spacious personal workout space, state-of-the-art cardio equipment, and a martial arts bag and floor zone. It's always a good time to work out as our gym is open daily 24/7 to ensure you can meet your fitness goals.",
        image: "https://seminyak.hotelindigo.com/cms/storage/app/uploads/public/682/c22/051/682c22051f96e252682812.webp",
        link: "/en/facilities/gym"
    }
];

export default function Facilities() {
    return (
        <section className="hidden md:block relative py-20">
            <FlareBox className="h-[1080px] xl:h-[900px] right-0 bottom-[100px]"/>
            <div className={cn(`${spacing.container} mb-12 animate-fade-in`)}>
                <h2 className="uppercase text-3xl md:text-4xl text-gray-900 mb-4 text-primary-500">Facilities</h2>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: ".prev-facility",
                    nextEl: ".next-facility",
                }}
                slidesPerView={1.4}
                centeredSlides={true}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 1.4,
                        centeredSlides: true,
                        spaceBetween:20
                    },
                    1024: {
                        slidesPerView: 1.4,
                        centeredSlides: true,
                        spaceBetween:20
                    },
                }}
                className="mySwiperHomeActivities"
            >
                {facilities.map((facility, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <div className="w-full h-[573px] justify-center overflow-hidden relative">
                            <Image
                                src={facility.image}
                                alt={facility.title}
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-primary font-light sm:bg-gradient-bottom md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end">
                                <p className="uppercase text-body font-light sm:text-white text-[1.2rem] sm:text-3xl pb-5">
                                    {facility.title}
                                </p>
                                <p className="text-body font-bold sm:text-white text-[.9rem]">
                                    {facility.description}
                                </p>
                                <div className="mt-[15px]">
                                    <a
                                        href={facility.link}
                                        className="bg-primary-500 text-white text-[.7rem] sm:text-[.7rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-secondary hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
                                    >
                                        Explore
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <span className="swiper-button-prev prev-facility !h-[30px] !w-[30px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] after:!content-[unset] !left-[18vw] sm:!left-[16vw] !top-[25%] sm:!top-[50%]">
                    <ChevronLeft className="h-5 w-5 text-white" />
                </span>
                <span className="swiper-button-next next-facility !h-[30px] !w-[30px] sm:!h-[50px] sm:!w-[50px] bg-[#6b6b6bab] after:!content-[unset] !right-[18vw] sm:!right-[16vw] !top-[25%] sm:!top-[50%]">
                    <ChevronRight className="h-5 w-5 text-white" />
                </span>
            </Swiper>
        </section>
    );
}
