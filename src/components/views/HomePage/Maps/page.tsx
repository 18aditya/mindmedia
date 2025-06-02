"use client";

import Image from "next/image";

const Maps = () => {
    return (
        <section className="bg-primary-500 py-14 my-14 ">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row gap-[40px] sm:gap-[80px] max-w-[1024px] mx-auto">
                    <div className="sm:w-[50%]">
                        <Image
                            src="/images/map/map.avif"
                            alt="Hotel Location Map"
                            width={1280}
                            height={1220}
                            className="aspect-square w-full object-cover object-center sm:rounded-bl-[150px]"
                        />
                    </div>
                    <div className="sm:w-[50%]">
                        <div className="font-primary font-light text-center sm:text-left">
                            <h3 className="uppercase text-white lg:text-[1.6rem] xl:text-[1.8rem] leading-[1.4]">
                                Jl. Camplung Tanduk No. 10<br />
                                Bali, 80361, Indonesia
                            </h3>
                            <ul className="my-[20px]">
                                <li>
                                    <a
                                        href="tel:623612099999"
                                        className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                                    >
                                        Tel: +62-361-2099999
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:hotelindigobali.reservations@ihg.com"
                                        className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                                    >
                                        Email: hotelindigobali.reservations@ihg.com
                                    </a>
                                </li>
                            </ul>
                            <p className="text-white text-[.9rem] sm:text-[.9rem] lg:text-[.8rem] xl:text-[.9rem]">
                                Check-in Time: 3PM | Check-out Time: 12PM <br />
                                *Minimum check-in age is 18 years old
                            </p>
                            <p className="mt-[20px] text-white text-[.9rem] sm:text-[.9rem] lg:text-[1rem] xl:text-[1.2rem]">
                                SHUTTLE SERVICE
                            </p>
                            <ul className="mt-[20px] mb-[40px]">
                                <li>
                                    <a
                                        href="https://seminyak.hotelindigo.com/pdf/transportation-price-2025-22-apr.pdf"
                                        target="_blank"
                                        className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                                    >
                                        Transportation / Airport Transfer Price List
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://seminyak.hotelindigo.com/images/arrival-flow.webp"
                                        target="_blank"
                                        className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                                    >
                                        International Airport Arrival Pick-up Information
                                    </a>
                                </li>
                            </ul>
                            <a
                                href="https://seminyak.hotelindigo.com/images/resort-map.webp"
                                target="_blank"
                                className="mt-[10px] font-primary text-primary-500 text-[.7rem] sm:text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] bg-white border-[1px] border-[#eee] px-[25px] py-[15px] uppercase rounded-full hover:text-[#A26928] hover:border-[#A26928]"
                            >
                                RESORT MAP
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Maps; 