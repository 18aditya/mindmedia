import { cn } from "@/lib/utils";
import { sizeClasses, variantClasses } from "./constants";
import { IconButtonProps } from "./type";

export default function IconButton({
  icon,
  ariaLabel,
  onClick,
  className = '',
  size = 'md',
  variant = 'primary',
  disabled = false
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={cn(`
        relative
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        flex
        justify-center
        items-center
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `)}
    >
      <div className="fill-white">
        {icon}
      </div>
    </button>
  );
} 