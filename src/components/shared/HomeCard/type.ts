export interface HomeCardProps {
    id?: string;
    title: string;
    imageUrl: string;
    link: string;
    description: string;
    isHoveredCard?: boolean;
    hoveredImage?: string;
    position: 'left' | 'center-left' | 'center-right' | 'right';
    variant?: 'default' | 'gradient';
  }