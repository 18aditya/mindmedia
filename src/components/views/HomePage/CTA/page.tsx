"use client";

import { spacing } from "@/lib/constants";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const CTA = () => {
  return (
    <section className={`${spacing.section} bg-primary-500 my-14 py-14`}>
      <div className="container mx-auto">
        <p className="text-center uppercase text-white font-primary lg:text-[1.6rem] xl:text-[1.8rem]">
          BE THE FIRST TO KNOW
        </p>
        <form id="submit-form" method="POST" className="mt-10 mb-20 flex sm:flex-row flex-col justify-between flex-wrap px-[30px] sm:px-0">
          <input type="text" id="website" name="website" aria-label="website" style={{ opacity: 0, position: 'absolute', height: 0, width: 0, padding: 0, margin: 0, border: 0 }} tabIndex={-1} autoComplete="off" />
          <div className="sm:w-[30%]">
            <input type="text" name="firstname" id="firstname" aria-label="first name" required className="font-primary text-white focus:ring-0 w-full text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem] bg-transparent !border-b-[1px] !border-l-0 !border-t-0 !border-r-0 border-white placeholder:text-white px-0 py-4" placeholder="First Name" />
          </div>
          <div className="sm:w-[30%]">
            <input type="text" name="lastname" id="lastname" aria-label="last name" required className="font-primary text-white focus:ring-0 w-full text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem] bg-transparent !border-b-[1px] !border-l-0 !border-t-0 !border-r-0 border-white placeholder:text-white px-0 py-4" placeholder="Last Name" />
          </div>
          <div className="sm:w-[30%]">
            <input type="email" name="email" id="email" aria-label="email" required className="font-primary text-white focus:ring-0 w-full text-[.9rem] lg:text-[.9rem] xl:text-[.9rem] 2xl:text-[1rem] bg-transparent !border-b-[1px] !border-l-0 !border-t-0 !border-r-0 border-white placeholder:text-white px-0 py-4" placeholder="Email Address" />
          </div>
          <div className="sm:w-[30%]">
            <div className="flex items-center mt-5 gap-3">
              <input id="checked-checkbox" type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checked-checkbox" className="ms-2 font-medium text-white font-primary text-[.7rem] lg:text-[.5rem] xl:text-[.7rem]">
                I have read & agree to the Privacy Policy
              </label>
            </div>
          </div>
          <div className="sm:w-[30%]">
            <div className="flex items-center mt-5 gap-3">
              <input id="checked-checkbox" type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checked-checkbox" className="ms-2 font-medium text-white font-primary text-[.7rem] lg:text-[.5rem] xl:text-[.7rem]">
                Yes, I would like to receive emails with exclusive specials & offers
              </label>
            </div>
          </div>
          <div className="sm:w-[30%] order-7 sm:order-6">
            <div className="mt-5 sm:mt-0 flex sm:blog justify-center sm:justify-start">
              <button className="mt-[10px] font-primary text-primary-500 text-[.8rem] lg:text-[.9rem] xl:text-[1rem] bg-white border-[1px] border-[#eee] px-[35px] py-[15px] uppercase rounded-full hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300" disabled>
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div className="sm:w-[200px]">
              <Image
                src="/images/logo/logo.avif"
                alt="Hotel Indigo Logo"
                width={200}
                height={134}
                className="w-[200px] mx-auto block sm:w-full filter brightness-0 invert"
              />
            </div>
            <div className="sm:w-[50%]">
              <p className="font-primary text-white font-light text-[1.5rem] mb-[20px] text-center sm:text-left">Follow Us</p>
              <ul className="flex items-center flex-wrap gap-5 lg:gap-3 xl:gap-3 justify-center sm:justify-start">
                <li>
                  <a target="_blank" aria-label="Facebook" href="https://www.facebook.com/HotelIndigoBali/" className="text-white hover:text-secondary transition-colors">
                    <Facebook className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" />
                  </a>
                </li>
                <li>
                  <a target="_blank" aria-label="Instagram" href="https://www.instagram.com/hotelindigobali/" className="text-white hover:text-secondary transition-colors">
                    <Instagram className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" />
                  </a>
                </li>
                <li>
                  <a target="_blank" aria-label="Twitter" href="https://twitter.com/hotelindigobali" className="text-white hover:text-secondary transition-colors">
                    <Twitter className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" />
                  </a>
                </li>
                <li>
                  <a target="_blank" aria-label="Tripadvisor" href="https://www.tripadvisor.com/Hotel_Review-g469404-d9595791-Reviews-Hotel_Indigo_Bali_Seminyak_Beach-Seminyak_Kuta_District_Bali.html" className="text-white hover:text-secondary transition-colors">
                    <svg className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0	c0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009	c1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15	c2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a target="_blank" aria-label="Youtube" href="https://www.youtube.com/channel/UCO7rAw9av92AWsTFyZSjbaQ" className="text-white hover:text-secondary transition-colors">
                    <Youtube className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" />
                  </a>
                </li>
                <li>
                  <a target="_blank" aria-label="Tiktok" href="https://www.tiktok.com/@hotelindigobaliseminyak" className="text-white hover:text-secondary transition-colors">
                    <svg className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/company/hotel-indigo-bali-seminyak-beach/" className="text-white hover:text-secondary transition-colors">
                    <Linkedin className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="flex flex-col justify-between">
              <ul className="font-primary font-light">
                <li className="mb-2 text-center sm:text-left">
                  <a href="https://www.ihg.com/content/gb/en/about/brands" target="_blank" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    About IHG
                  </a>
                </li>
                <li className="mb-2 text-center sm:text-left">
                  <a href="https://www.ihg.com/content/us/en/about/brands" target="_blank" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    IHG Global Brands
                  </a>
                </li>
                <li className="mb-2 text-center sm:text-left">
                  <a href="https://www.ihg.com/hotelindigo/destinations/us/en/explore" target="_blank" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    Explore Hotels
                  </a>
                </li>
                <li className="mb-2 text-center sm:text-left">
                  <a href="/en/sitemap" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    Site Map
                  </a>
                </li>
              </ul>
              <Image
                src="/images/awards/ihg-rewards.avif"
                alt="IHG Rewards"
                width={200}
                height={40}
                className="w-full mt-8 hidden sm:block"
              />
            </div>
            <div className="flex flex-col justify-between">
              <ul className="font-primary font-light">
                <li className="mb-2 text-center sm:text-left">
                  <a href="/en/term-of-use" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    Term of Use
                  </a>
                </li>
                <li className="mb-2 text-center sm:text-left">
                  <a href="/en/privacy-statement" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    Privacy Statement
                  </a>
                </li>
                <li className="mb-2 text-center sm:text-left">
                  <a href="/en/privacy-policy" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2 text-center sm:text-left">
                  <a href="/en/cookie-usage" className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary">
                    Cookie Usage
                  </a>
                </li>
              </ul>
              <Image
                src="/images/awards/ihg-business-rewards.avif"
                alt="IHG Business Rewards"
                width={200}
                height={40}
                className="w-full mt-8 hidden sm:block"
              />
            </div>
            <div className="flex flex-col justify-between max-w-full md:max-w-[150px]">
            <div>
              <a href="https://www.ihg.com/content/us/en/customer-care/bwc-lp" className="uppercase text-white text-center md:text-start font-primary text-light lg:text-[1.6rem] xl:text-[1.6rem] leading-[130%] block" target="_blank">
                Best Price<br />Guarantee
              </a>
              <p className="font-primary text-center md:text-start font-light text-white lg:text-[.8rem] xl:text-[.9rem]">
                When you book with us
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <p className="font-primary text-center md:text-start text-white lg:text-[.8rem] xl:text-[.9rem] uppercase">
                Book Online / Call
              </p>
              <a href="tel:0018030160061" className="text-secondary text-center md:text-start font-primary font-light text-[1.6rem] lg:text-[1rem] xl:text-[1.2rem] block">
                001 803 016 0061
              </a>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default CTA; 