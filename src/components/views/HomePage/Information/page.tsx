"use client";

import Image from "next/image";

const Information = () => {
    return (
        <section className="container mx-auto hidden sm:flex items-center mt-[40px] sm:mt-[8rem]">
            <div className="w-[50%] sm:w-[25%] h-[40vh] sm:h-[73vh] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block">
                <Image
                    src="/images/information/photo1.avif"
                    alt="Hotel Interior"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="parallaxContainer w-[60%] sm:w-[25%] h-[40vh] sm:h-[73vh] overflow-hidden block sm:hidden">
                <Image
                    src="/images/information/photo1.avif"
                    alt="Hotel Interior"
                    width={1280}
                    height={720}
                    className="parallaxImage h-[80vh] object-cover object-center"
                />
            </div>
            <div className="w-[40%] sm:w-[25%] flex flex-col items-center">
                <p className="font-primary text-primary font-light md:text-[2.5rem] lg:text-[1.7rem] xl:text-[2.2rem] px-[70px] text-center uppercase hidden sm:block">
                    Take a Look Inside
                </p>
                <div className="mt-[15px]">
                    <a
                        href="https://www.ihg.com/hotelindigo/redirect?path=hd-hotel-reviews&brandCode=in&hotelCode=dpsin&regionCode=1&localeCode=en&cm_mmc=iws_widget_DPSIN&icdv=99502222&dp=true"
                        target="_blank"
                        className="bg-primary-500 text-white text-[.7rem] sm:text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] px-[25px] py-[10px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-[#A26928] hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
                    >
                        View All
                    </a>
                </div>
            </div>
            <div className="w-[50%] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block">
                <Image
                    src="/images/information/photo2.avif"
                    alt="Hotel Interior"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    );
};

export default Information; 