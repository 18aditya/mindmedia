import { HomeCardProps } from "./type";

const useHomeCard = (props: HomeCardProps) => {

    const {
        isHoveredCard,
        hoveredImage,
        position,
    } = props

    const getImagePosition = () => {
     
        // On mobile, always center the image
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            return 'object-center';
        }

        // On desktop, apply hover effects
        if (isHoveredCard || hoveredImage) {
            switch (position) {
                case 'left':
                    return 'object-[0%_25%]';
                case 'center-left':
                    return 'object-[28%_50%]';
                case 'center-right':
                    return 'object-[57%_75%]';
                case 'right':
                    return 'object-[86%_100%]';
                default:
                    return 'object-center';
            }
        }
        return 'object-center';
    };


    return {
        getImagePosition
    }
}

export default useHomeCard