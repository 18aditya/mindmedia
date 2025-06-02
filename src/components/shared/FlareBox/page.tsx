'use client'
import { FlareBoxProps } from "./type";
import useFlareBox from "./hook";
import { cn } from "@/lib/utils";
import { useId } from "react";

const FlareBox = ({ className = " left-0" }: FlareBoxProps) => {
    const { containerRef, scale } = useFlareBox();
    const id = useId();
    const isRight = className.includes('right-0');

    return (
        <div 
            ref={containerRef}
            id={`flareBox-${id}`}
            className={cn(`absolute bottom-0 w-[150px] block bg-primary-500 transition-all duration-1000 ease-in-out transform ${isRight ? 'origin-right' : 'origin-left'} ${className}`)}
            style={{ transform: `scaleX(${scale})` }}
        />
    );
};

export default FlareBox;