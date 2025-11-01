/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '24px',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1200px',
			},
		},
		extend: {
			colors: {
				// NawaEduTech Brand Colors
				primary: {
					50: '#f3f1ff',
					100: '#e6e3e6',
					500: '#340690',
					600: '#2a0573',
					700: '#1f0456',
					DEFAULT: '#340690',
					foreground: '#ffffff',
				},
				secondary: {
					500: '#5f2cc7',
					600: '#4c239f',
					700: '#391a77',
					DEFAULT: '#5f2cc7',
					foreground: '#ffffff',
				},
				accent: {
					500: '#864bf5',
					600: '#6b3cc4',
					700: '#502d93',
					DEFAULT: '#864bf5',
					foreground: '#ffffff',
				},
				highlight: {
					500: '#f3b942',
					600: '#e09f2b',
					700: '#cc8514',
					DEFAULT: '#f3b942',
					foreground: '#340690',
				},
				neutral: {
					50: '#ffffff',
					100: '#f8f9fa',
					200: '#e6e3e6',
					500: '#666666',
					700: '#2d2d2d',
					900: '#1a1a1a',
				},
				semantic: {
					success: '#10b981',
					warning: '#f59e0b',
					error: '#ef4444',
					info: '#3b82f6',
				},
			},
			fontFamily: {
				almarai: ['Almarai', 'Arial', 'sans-serif'],
				poppins: ['Poppins', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				display: '48px',
				h1: '36px',
				h2: '28px',
				h3: '24px',
				'body-large': '18px',
				body: '16px',
				'body-small': '14px',
				button: '16px',
			},
			spacing: {
				xs: '8px',
				sm: '12px',
				md: '16px',
				lg: '24px',
				xl: '32px',
				'2xl': '48px',
				'3xl': '64px',
				'4xl': '96px',
			},
			borderRadius: {
				sm: '8px',
				md: '12px',
				lg: '16px',
				full: '9999px',
			},
			boxShadow: {
				sm: '0 2px 8px rgba(52, 6, 144, 0.08)',
				md: '0 4px 16px rgba(52, 6, 144, 0.12)',
				lg: '0 8px 32px rgba(52, 6, 144, 0.16)',
				islamic: '0 4px 16px rgba(52, 6, 144, 0.1), 0 1px 4px rgba(243, 185, 66, 0.2)',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			transitionDuration: {
				fast: '150ms',
				normal: '250ms',
				slow: '400ms',
				slower: '600ms',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
