import { useState } from "react";
import { Card } from "./type";

const useGalleryGrid = () => {

    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };


    return {
        lastSelected,
        selected,
        handleClick,
        handleOutsideClick,
    }
}

export default useGalleryGrid