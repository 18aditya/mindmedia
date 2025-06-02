import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Plus Jakarta Sans',
  				'system-ui',
  				'sans-serif'
  			],
  			jakarta: [
  				'Plus Jakarta Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				'50': '#E6EBF0',
  				'100': '#CCD7E1',
  				'200': '#99AFD3',
  				'300': '#6687C5',
  				'400': '#335FB7',
  				'500': '#002D52',
  				'600': '#002447',
  				'700': '#001B3C',
  				'800': '#001231',
  				'900': '#000926',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'fade-out': 'fadeOut 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'slide-down': 'slideDown 0.5s ease-out',
  			'scale-in': 'scaleIn 0.2s ease-out',
  			'scale-out': 'scaleOut 0.2s ease-out',
  			'slide-in-right': 'slideInRight 0.5s ease-out',
  			'slide-in-left': 'slideInLeft 0.5s ease-out',
  			'slide-in-up': 'slideInUp 0.5s ease-out',
  			'slide-in-down': 'slideInDown 0.5s ease-out',
  			'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  			'bounce-out': 'bounceOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  			'zoom-in': 'zoomIn 0.2s ease-out',
  			'zoom-out': 'zoomOut 0.2s ease-out',
  			'rotate-in': 'rotateIn 0.5s ease-out',
  			'rotate-out': 'rotateOut 0.5s ease-out',
  			'flip-in': 'flipIn 0.5s ease-out',
  			'flip-out': 'flipOut 0.5s ease-out',
  			'slide-x': 'slideX 10s linear infinite'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			fadeOut: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideDown: {
  				'0%': {
  					transform: 'translateY(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					transform: 'scale(0.95)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			scaleOut: {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(0.95)',
  					opacity: '0'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					transform: 'translateX(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideInUp: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			slideInDown: {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			bounceIn: {
  				'0%': {
  					transform: 'scale(0.3)',
  					opacity: '0'
  				},
  				'50%': {
  					transform: 'scale(1.05)',
  					opacity: '0.8'
  				},
  				'70%': {
  					transform: 'scale(0.9)',
  					opacity: '0.9'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			bounceOut: {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'30%': {
  					transform: 'scale(1.05)',
  					opacity: '0.9'
  				},
  				'50%': {
  					transform: 'scale(0.9)',
  					opacity: '0.8'
  				},
  				'100%': {
  					transform: 'scale(0.3)',
  					opacity: '0'
  				}
  			},
  			zoomIn: {
  				'0%': {
  					transform: 'scale(0.9)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			zoomOut: {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(0.9)',
  					opacity: '0'
  				}
  			},
  			rotateIn: {
  				'0%': {
  					transform: 'rotate(-180deg) scale(0)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'rotate(0) scale(1)',
  					opacity: '1'
  				}
  			},
  			rotateOut: {
  				'0%': {
  					transform: 'rotate(0) scale(1)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(180deg) scale(0)',
  					opacity: '0'
  				}
  			},
  			flipIn: {
  				'0%': {
  					transform: 'perspective(400px) rotateY(90deg)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'perspective(400px) rotateY(0)',
  					opacity: '1'
  				}
  			},
  			flipOut: {
  				'0%': {
  					transform: 'perspective(400px) rotateY(0)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'perspective(400px) rotateY(90deg)',
  					opacity: '0'
  				}
  			},
  			slideX: {
  				'0%': {
  					transform: 'translateX(-20%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			}
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
      require("tailwindcss-animate")
],
}

export default config 