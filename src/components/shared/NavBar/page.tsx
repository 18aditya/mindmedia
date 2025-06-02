"use client";

import Image from "next/image";
import { ChevronDown, X, Phone, Mail, ShoppingBag } from "lucide-react";
import FollowUs from "../FollowUs/page";
import { menuItems } from "./constants";
import useNavBar from "./hook";
import { useState } from "react";
import IconButton from "../IconButton";
import BestDealModal from "@/components/views/HomePage/BestDeal/BestDealModal";

const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Bahasa Indonesia' }
];

const NavBar = () => {
    const {
        isOpen,
        setIsOpen,
        toggleAccordion,
        openAccordion,
        isScrolled,
        isModalOpen,
        setIsModalOpen
    } = useNavBar();

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('en');

    return (
        <>
            {/* Mobile Header */}
            <header className="sticky top-0 z-50 relative flex sm:hidden items-center left-0 w-full h-[8vh] md:h-[8vh] lg:h-[10vh] pl-[20px] pr-[20px] sm:pl-[20px] sm:pr-[20px] py-[20px] sm:py-[20px] transition-all !duration-300 justify-center bg-white shadow-header">
                <a href="/en">
                    <Image
                        src="/images/logo/logo.avif"
                        alt="Hotel Indigo Seminyak Logo"
                        width={80}
                        height={54}
                        className="brandMobile w-[80px] brand filter"
                    />
                </a>
                <ul className="mr-3 absolute right-0 top-0 bottom-0 flex items-center">
                    <li className="text-[.8rem]">
                        <div
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="relative uppercase after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0 after:bg-secondary text-primary cursor-pointer"
                        >
                            {selectedLang}
                            <ChevronDown className={`w-2.5 h-2.5 ms-3 transition-all duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isLangOpen && (
                            <div className="z-10 !top-[30px] absolute bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5 w-[180px] !-m-[10px]">
                                <ul className="py-2 text-sm text-body flex flex-col">
                                    {languages.map((lang) => (
                                        <li key={lang.code} className="border-b-[1px] border-[#f5f5f5]">
                                            <div
                                                onClick={() => {
                                                    setSelectedLang(lang.code);
                                                    setIsLangOpen(false);
                                                }}
                                                className="py-3 block relative after:content-[''] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] cursor-pointer"
                                            >
                                                {lang.name}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </header>

            {/* Desktop Header */}
            <header className={`hidden sm:flex fixed top-0 left-0 w-full z-50 items-center justify-between h-[8vh] md:h-[8vh] lg:h-[10vh]  transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md pl-5' : 'bg-transparent px-5'}`}>
                <div>
                    <a href="/en">
                        <Image
                            src="/images/logo/logo.avif"
                            alt="Hotel Indigo Seminyak Logo"
                            width={80}
                            height={54}
                            className={`brandM w-[80px] brand filter transition-all duration-300 ease-in-out ${isScrolled ? '' : 'invert brightness-0'}`}
                        />
                    </a>
                </div>

                <div className={`flex flex-row gap-[15px] ${isScrolled && 'h-full'} transition-all duration-300 items-center`}>
                    {/* Horizontal Navigation */}
                    <nav className="hidden xl:block">
                        <ul className="uppercase gap-[15px] lg:text-[.5rem] xl:text-[.8rem] flex font-primary">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative group ">
                                    {item.items ? (
                                        <>
                                            <a
                                                href={item.href}
                                                className={`text-[16px] relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] flex items-center group rotate-0 after:bg-secondary ${isScrolled ? 'text-primary-500' : 'text-white'}`}
                                            >
                                                {item.title}
                                                <ChevronDown className={`w-2.5 h-2.5 ms-3 transition-all duration-300 ${isScrolled ? 'text-primary-500' : 'text-white'}`} />
                                            </a>
                                            <div className="z-10 !top-[25px] group-hover:flex bg-white divide-y divide-gray-100 rounded-none shadow dark:bg-gray-700 py-2 px-5 hidden absolute">
                                                <ul className="py-2 text-sm text-body flex flex-col">
                                                    {item.items.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="border-b-[1px] border-[#f5f5f5]">
                                                            <a
                                                                href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                                                                className="py-3 block relative after:content-[''] after:absolute after:block after:left-0 after:top-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]"
                                                            >
                                                                {subItem}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`text-[16px] relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px] after:bg-secondary ${isScrolled ? 'text-primary-500' : 'text-white'}`}
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={`font-primary font-light flex items-center h-full transition-colors duration-300 ease-in-out ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
                        <div className="relative mr-3">
                            <div
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`relative uppercase after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] flex items-center group rotate-0 cursor-pointer ${isScrolled ? 'after:bg-primary-500' : 'after:bg-white'}`}
                            >
                                {selectedLang}
                                <ChevronDown className={`w-2.5 h-2.5 ms-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isLangOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[150px] z-50">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.code}
                                            onClick={() => {
                                                setSelectedLang(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 cursor-pointer ${selectedLang === lang.code ? 'text-primary-500' : 'text-gray-700'}`}
                                        >
                                            {lang.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className={`xl:hidden focus:ring-0 uppercase flex justify-center flex-col items-end gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300 ${isScrolled ? 'text-primary-500' : 'text-white'}`}
                    >
                        Menu
                        <span className={`line !block h-[1px] w-full mb-[3px] group-hover:w-[70%] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary-500' : 'bg-white'}`}></span>
                        <span className={`line !block h-[1px] w-full mb-[3px] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary-500' : 'bg-white'}`}></span>
                        <span className={`line !block h-[1px] w-[50%] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary-500' : 'bg-white'}`}></span>
                    </button>
                    <a
                        target="_blank"
                        className={`flex xl:hidden uppercase text-white ml-[10px] text-[.7rem] h-full px-5 items-center justify-center border-[1px] transition-all !duration-300 hover:bg-[#A26928] ${isScrolled ? 'text-white bg-primary-500 border-primary-500' : 'text-white bg-transparent border-white '}`}
                        href="https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DPSIN&PMID=99502222&&icdv=99502222"
                    >
                        Book Now
                    </a>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <div id="menu-mobile-bottom" className="fixed bottom-0 left-0 w-full z-30 h-[70px] pl-3 bg-[#f3f4f1] sm:hidden block shadow-header transition-all !duration-300">
                <ul className="flex justify-between items-center">
                    <li className="w-[calc(50%/4)] flex justify-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-primary focus:ring-0 uppercase flex justify-center flex-col items-start gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300"
                            type="button"
                        >
                            Menu
                            <span className="!block h-[1px] w-full bg-primary mb-[3px] group-hover:w-[70%] transition-all duration-300"></span>
                            <span className="!block h-[1px] w-full bg-primary mb-[3px]"></span>
                            <span className="!block h-[1px] w-[50%] bg-primary"></span>
                        </button>
                    </li>
                    <li className="flex items-center justify-center w-[calc(50%/4)]">
                        <IconButton
                            icon={
                                <ShoppingBag className="w-[25px] h-[25px] text-black" />
                            }
                            ariaLabel="Best Deal"
                            className="bg-transparent hover:bg-transparent"
                            onClick={() => setIsModalOpen(true)}
                        />

                        <BestDealModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="Best Deal Offer"
                            showCloseButton
                        />
                    </li>
                    <li className="flex items-center justify-center w-[calc(50%/4)]">
                        <a href="tel:623612099999" className="text-center">
                            <Phone className="w-[25px] h-[25px] text-black" />
                        </a>
                    </li>
                    <li className="flex items-center justify-center w-[calc(50%/4)]">
                        <a href="mailto:hotelindigobali.reservations@ihg.com" target="_blank" className="text-center">
                            <Mail className="w-[25px] h-[25px] text-black" />
                        </a>
                    </li>
                    <li className="w-[50%]">
                        <a target="_blank" className="flex flex-col items-center" href="https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DPSIN&PMID=99502222&&icdv=99502222">
                            <span className="text-[5vw] text-[#F5F6F1] bg-primary-500 w-full h-[70px] flex items-center justify-center">
                                <p className="text-[.9rem] font-primary uppercase text-white">Check Availability</p>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[300px] bg-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-6 h-full flex flex-col">


                    <div className="flex-1 overflow-y-auto">
                        <div className="mb-8 flex flex-row justify-between">
                            <h5 id="drawer-label" className="block mb-4 text-base font-normal text-primary uppercase leading-[130%] border-b-[1px] border-[#3333334d] pb-[10px]">
                                Hotel Indigo Bali<br />Seminyak Beach
                            </h5>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors duration-300 w-6 h-6"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="space-y-4">
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    {item.items ? (
                                        <div>
                                            <button
                                                onClick={() => toggleAccordion(item.title)}
                                                className={`w-full text-left py-0 px-4 transition-colors duration-300 ease-in-out ${openAccordion === item.title ? "bg-primary-500 text-white p-6" : "text-gray-800"
                                                    }`}
                                            >
                                                {item.title}
                                                <ChevronDown
                                                    className={`inline-block ml-2 w-4 h-4 transition-transform duration-300 ease-in-out ${openAccordion === item.title ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            {openAccordion === item.title && (
                                                <div className="pl-4 space-y-2 mt-2">
                                                    {item.items.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                                                            className="block py-2 text-gray-600 hover:text-[#A26928] transition-colors duration-300 ease-in-out"
                                                        >
                                                            {subItem}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block py-0 px-4 text-gray-800 hover:text-[#A26928] transition-colors duration-300 ease-in-out"
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="mt-auto pt-8 border-t border-gray-200">
                                <FollowUs color='primary-500' />
                            </div>
                        </nav>
                    </div>


                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default NavBar; 