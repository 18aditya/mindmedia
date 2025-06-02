"use client";

import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import FollowUs from "../FollowUs/page";
import { menuItems } from "./constants";
import useNavBar from "./hook";
import { useState } from "react";

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
        isScrolled
    } = useNavBar();

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('en');

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between h-[8vh] md:h-[8vh] lg:h-[10vh] px-5 py-[20px] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}>
                <div>
                    <a href="/en">
                        <Image
                            src="/images/logo/logo.avif"
                            alt="Hotel Indigo Seminyak Logo"
                            width={80}
                            height={54}
                            className={`brandM w-[80px] brand filter transition-all duration-300 ease-in-out ${isScrolled ? '' : 'invert brightness-0'
                                }`}
                        />
                    </a>
                </div>
                <div className={`font-primary font-light flex items-center h-full transition-colors duration-300 ease-in-out ${isScrolled ? 'text-primary-500' : 'text-white'
                    }`}>
                    <div className="relative mr-3">
                        <button 
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className={`relative uppercase after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[30px] flex items-center group rotate-0 ${
                                isScrolled ? 'after:bg-primary-500' : 'after:bg-white'
                            }`}
                        >
                            {selectedLang}
                            <ChevronDown className={`w-2.5 h-2.5 ms-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isLangOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[150px] z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setSelectedLang(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                                            selectedLang === lang.code ? 'text-primary-500' : 'text-gray-700'
                                        }`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="focus:ring-0 uppercase flex justify-center flex-col items-end gap-[2px] text-[.8rem] h-[35px] group transition-all duration-300"
                    >
                        Menu
                        <span className={`line !block h-[1px] w-full mb-[3px] group-hover:w-[70%] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary-500' : 'bg-white'
                            }`}></span>
                        <span className={`line !block h-[1px] w-full mb-[3px] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary-500' : 'bg-white'
                            }`}></span>
                        <span className={`line !block h-[1px] w-[50%] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary-500' : 'bg-white'
                            }`}></span>
                    </button>
                    <a
                        target="_blank"
                        className={`uppercase ml-[10px] text-[.7rem] h-full px-5 md:flex items-center justify-center border-[1px] transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary hover:text-white ${isScrolled
                            ? 'text-white bg-primary-500 border-primary-500'
                            : 'text-white border-white bg-transparent'
                            }`}
                        href="https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DPSIN&PMID=99502222&&icdv=99502222"
                    >
                        Book Now
                    </a>
                </div>
            </header>

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