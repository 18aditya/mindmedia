import { ReactNode } from "react";

export interface IconButtonProps {
    icon: ReactNode;
    ariaLabel: string;
    onClick?: () => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
  }