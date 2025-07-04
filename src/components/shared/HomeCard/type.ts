export interface HomeCardProps {
    id?: string;
    title: string;
    imageUrl: string;
    link: string;
    description: string;
    isHoveredCard?: boolean;
    hoveredImage?: string | undefined | null;
    position: 'left' | 'center-left' | 'center-right' | 'right';
    variant?: 'default' | 'gradient';
  }