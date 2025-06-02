"use client";

import { useState, useEffect } from "react";

const useNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('heroSection');
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setIsScrolled(heroBottom <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return {
        isOpen,
        setIsOpen,
        toggleAccordion,
        openAccordion,
        isScrolled,
        isModalOpen, 
        setIsModalOpen
    };
};

export default useNavBar;