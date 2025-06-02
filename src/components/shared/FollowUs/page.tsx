"use client";

import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

interface FollowUsProps {
  color?: 'primary-500' | 'white';
}

const FollowUs = ({ color = 'primary-500' }: FollowUsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-base font-normal uppercase leading-[130%]">Follow Us</h5>
      <div className="flex gap-3">
        <a
          href="https://www.facebook.com/hotelindigobali"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-opacity duration-300`}
          aria-label="Facebook"
        >
          <Facebook className={`w-[18px] h-[18px] ${color === 'primary-500' ? 'text-primary-500' : 'text-white'}`} />
        </a>
        <a
          href="https://www.instagram.com/hotelindigobali"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-opacity duration-300`}
          aria-label="Instagram"
        >
          <Instagram className={`w-[18px] h-[18px] ${color === 'primary-500' ? 'text-primary-500' : 'text-white'}`} />
        </a>
        <a
          href="https://twitter.com/hotelindigobali"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-opacity duration-300`}
          aria-label="Twitter"
        >
          <Twitter className={`w-[18px] h-[18px] ${color === 'primary-500' ? 'text-primary-500' : 'text-white'}`} />
        </a>
        <a
          href="https://www.youtube.com/hotelindigobali"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-opacity duration-300`}
          aria-label="YouTube"
        >
          <Youtube className={`w-[18px] h-[18px] ${color === 'primary-500' ? 'text-primary-500' : 'text-white'}`} />
        </a>
        <a
          href="https://www.linkedin.com/company/hotelindigobali"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:opacity-80 transition-opacity duration-300`}
          aria-label="LinkedIn"
        >
          <Linkedin className={`w-[18px] h-[18px] ${color === 'primary-500' ? 'text-primary-500' : 'text-white'}`} />
        </a>
      </div>
    </div>
  );
};

export default FollowUs; 