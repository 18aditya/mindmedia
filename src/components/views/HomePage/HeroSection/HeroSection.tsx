'use client'
import useHeroSection from './hook';
import { Pause, Play, Volume2, VolumeX, Image as ImageIcon, Video, ChevronDown } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import Image from 'next/image';

export default function HeroSection() {
  const {
    showVideo,
    videoRef,
    isMuted,
    toggleMute,
    togglePlay,
    isPlaying,
    toggleVideo,
    arrivalDate,
    departureDate,
    guests,
    setGuests,
    rooms,
    setRooms,
    handleArrivalSelect,
    handleDepartureSelect
  } = useHeroSection();

  const [isArrivalOpen, setIsArrivalOpen] = useState(false);
  const [isDepartureOpen, setIsDepartureOpen] = useState(false);

  return (
    <section id='heroSection' className="relative h-screen w-full overflow-hidden">
      <div id="heroBanner" className="absolute inset-0 w-full h-full overflow-hidden">
        {showVideo ? (
          <video
            id='heroVideo'
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/hero-background.webm" type="video/webm" />
          </video>
        ) : (
          <div
            id='heroImage'
            className="absolute w-[120%] h-[120%] animate-slide-x"
          >
            <Image
              src="/images/accommodation/banner.webp"
              alt="Hotel Indigo Bali Seminyak"
              className="absolute w-full h-full object-cover scale-110"
            />
          </div>
        )}
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-10 left-4 z-10 flex items-center gap-4 bg-black/50 p-2 rounded-lg">
        {showVideo && (
          <>
            <button
              onClick={togglePlay}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </button>
          </>
        )}
        <button
          onClick={toggleVideo}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {showVideo ? (
            <ImageIcon className="h-6 w-6" />
          ) : (
            <Video className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="absolute h-full w-full left-0 font-beausite text-white flex items-end justify-center">
        <div className="text-content text-center mb-[100px] relative z-20">
          <p className="uppercase text-[.9rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium leading-[100%]">BOUTIQUE HOTEL STEPS FROM</p>
          <p className="uppercase text-[1.3rem] sm:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] font-medium">SEMINYAK BEACH FRONT</p>
        </div>
      </div>

      <div className="absolute h-full w-full left-0 hidden lg:flex font-beausite text-white flex items-end justify-center">
        <div className='bg-white text-body w-[665px] h-[70px] mb-[20px] flex items-center pl-4 rounded-l-lg rounded-r-xl border-0'>
          <div className="flex items-center flex-1">
            {/* Arrival Date */}
            <Popover open={isArrivalOpen} onOpenChange={setIsArrivalOpen}>
              <PopoverTrigger asChild>
                <div className='flex flex-col p-[10px]'>
                  <p className='text-black uppercase lg:text-[10px] xl:text-[12px] font-semibold'>Arrival</p>
                  <Button variant="ghost" className="flex items-center gap-2 h-8 px-0 py-0">
                    <div className='flex gap-[25px] items-center'>
                      <p className="lg:text-[1.5em] xl:text-[2em] font-light w-[45px] text-gray-800">
                        {arrivalDate ? format(arrivalDate, "d") : "Arrival"}
                      </p>
                      <p className="uppercase flex items-center gap-2 lg:text-[14px] xl:text-[16px] text-gray-800">
                        <span>{arrivalDate ? format(arrivalDate, "MMM") : ""}</span>
                        <ChevronDown className={`h-5 w-5 fill-body transition-all duration-300 ${isArrivalOpen ? 'rotate-180' : ''}`} />
                      </p>
                    </div>
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={arrivalDate}
                  onSelect={handleArrivalSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Departure Date */}
            <Popover open={isDepartureOpen} onOpenChange={setIsDepartureOpen}>
              <PopoverTrigger asChild>
                <div className='flex flex-col p-[10px]'>
                  <p className='text-black uppercase lg:text-[10px] xl:text-[12px] font-semibold'>Departure</p>
                  <Button variant="ghost" className="flex items-center gap-2 h-8 px-0 py-0">
                    <div className='flex gap-[25px] items-center'>
                      <p className="lg:text-[1.5em] xl:text-[2em] font-light w-[45px] text-gray-800">
                        {departureDate ? format(departureDate, "d") : "Departure"}
                      </p>
                      <p className="uppercase flex items-center gap-2 lg:text-[14px] xl:text-[16px] text-gray-800">
                        <span>{departureDate ? format(departureDate, "MMM") : ""}</span>
                        <ChevronDown className={`h-5 w-5 fill-body transition-all duration-300 ${isDepartureOpen ? 'rotate-180' : ''}`} />
                      </p>
                    </div>
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={handleDepartureSelect}
                  initialFocus
                  disabled={(date) => date <= arrivalDate}
                />
              </PopoverContent>
            </Popover>

            {/* Guests */}
            <Select value={guests} onValueChange={setGuests}>
              <div className='flex flex-col p-[10px]'>
                <p className='text-black uppercase lg:text-[10px] xl:text-[12px] font-semibold'>Guest</p>
                <SelectTrigger className="w-[115px] h-full bg-transparent border-0 px-0 py-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                  <Button variant="ghost" className="flex items-center gap-2 h-8 px-0 py-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                    <div className="bg-transparent font-primary lg:text-[1.5em] xl:text-[2em] font-light cursor-pointer flex justify-between items-center">
                      <span className='text-black'>{guests}</span>
                    </div>
                  </Button>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </div>
            </Select>

            {/* Rooms */}
            <Select value={rooms} onValueChange={setRooms}>
              <div className='flex flex-col p-[10px]'>
                <p className='text-black uppercase lg:text-[10px] xl:text-[12px] font-semibold'>Rooms</p>
                <SelectTrigger className="w-[115px] h-full bg-transparent border-0 px-0 py-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                  <Button variant="ghost" className="flex items-center gap-2 h-8 px-0 py-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                    <div className="bg-transparent font-primary lg:text-[1.5em] xl:text-[2em] font-light cursor-pointer flex justify-between items-center">
                      <span className='text-black'>{rooms}</span>
                    </div>
                  </Button>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </div>
            </Select>
          </div>

          <Button className='uppercase h-full bg-primary-500 text-white font-beausite whitespace-nowrap px-5 rounded-l-none transition-all !duration-500 hover:bg-primary-600'>
            Book now
          </Button>
        </div>
      </div>
    </section>
  );
} 