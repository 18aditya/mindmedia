"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./type";
import Image from "next/image";

export const GalleryGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="h-screen py-20 w-full">
      <div className="w-full h-full p-4 sm:p-10 grid grid-cols-3 max-w-7xl mx-auto gap-2 sm:gap-4 relative">
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "")}>
            <div
              className={cn(
                card.className,
                "relative overflow-hidden bg-white rounded-xl h-full w-full hover:scale-[1.02] transition-all duration-300 ease-in-out"
              )}
            >
              <div className="bg-transparent h-full w-full flex flex-col justify-center items-center rounded-lg shadow-2xl relative">
                <div className="absolute inset-0 h-full w-full bg-black opacity-60 z-10" />
                <div className="relative px-8 pb-4 z-[70] text-center">
                  {card.content}
                </div>
              </div>
              <ImageComponent card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <Image
      src={card.thumbnail}
      height={500}
      width={500}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full"
      )}
      alt="thumbnail"
    />
  );
}; 