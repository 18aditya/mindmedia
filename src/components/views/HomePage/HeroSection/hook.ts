'use client'
import { useRef, useState, useEffect } from 'react';

export default function useHeroSection() {
    const today = new Date();

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showVideo, setShowVideo] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [arrivalDate, setArrivalDate] = useState<Date>(today);
    const [departureDate, setDepartureDate] = useState<Date>(() => {
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    });
    const [guests, setGuests] = useState("1");
    const [rooms, setRooms] = useState("1");

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleVideo = () => {
        if (showVideo) {
            // Switching to image mode
            if (videoRef.current) {
                videoRef.current.pause();
            }
        } else {
            // Switching to video mode - reset states
            setIsPlaying(true);
            setIsMuted(true);
            if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.play();
            }
        }
        setShowVideo(!showVideo);
    };

    const handleArrivalSelect = (date: Date | undefined) => {
        if (date) {
            setArrivalDate(date);
            // If departure date is before new arrival date, update it
            if (departureDate < date) {
                const newDeparture = new Date(date);
                newDeparture.setDate(newDeparture.getDate() + 1);
                setDepartureDate(newDeparture);
            }
        }
    };

    const handleDepartureSelect = (date: Date | undefined) => {
        if (date && date > arrivalDate) {
            setDepartureDate(date);
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    return {
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
        handleDepartureSelect,
    }
}