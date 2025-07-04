"use client";

import { spacing } from "@/lib/constants";

const Review = () => {
  return (
    <section className={spacing.section}>
      <div className={spacing.container}>
        <p className="text-primary-500 font-primary font-[400] sm:font-light text-[1.5rem] sm:text-[2.2rem] lg:text-[2.2rem] xl:text-[2.8rem] w-full sm:w-[600px]">
          YOU DON&apos;T HAVE TO TAKE OUR WORD FOR IT
        </p>
        <div className="my-[20px] sm:my-[40px] flex items-center gap-[10px]">
          <ul className="flex items-center gap-[5px]">
            {[...Array(4)].map((_, i) => (
              <li key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256">
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
              </li>
            ))}
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#d23d49" viewBox="0 0 256 256">
                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.4,16.4,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65A8,8,0,0,0,128,181.1V32c.24,0,.27.08.35.26L153,91.86a8,8,0,0,0,6.75,4.92l63.91,5.16c.16,0,.25,0,.34.29S224,102.63,223.84,102.73Z"></path>
              </svg>
            </li>
          </ul>
          <p className="text-body font-primary lg:text-[.8rem] xl:text-[.9rem]">4.8/5(1147 Reviews)</p>
        </div>
        <a
          href="https://www.ihg.com/hotelindigo/redirect?path=hd-hotel-reviews&brandCode=in&hotelCode=dpsin&regionCode=1&localeCode=en&cm_mmc=iws_widget_DPSIN&icdv=99502222&dp=true"
          target="_blank"
          className="bg-primary-500 text-white lg:text-[.8rem] xl:text-[.9rem] px-[35px] py-[15px] rounded-full uppercase transition duration-300 ease-in-out inline-block mt-[20px] transform hover:bg-[#A26928] hover:shadow-[0px_0px_52px_18px_rgba(0,_0,_0,_0.1)] hover:-translate-y-1"
        >
          Explore
        </a>
      </div>
    </section>
  );
};

export default Review; 