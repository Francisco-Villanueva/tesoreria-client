/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
				montserrat: ['var(--font-montserrat)'],
			},
			fontSize: {
				sm: ['0.75rem', '1rem'],
				md: ['0.875rem', '1.375rem'],
				lg: ['1rem', '1.5rem'],
				xl: ['1.25rem', '1.75rem'],
				'2xl': ['1.5rem', '2rem'],
				'3xl': ['2rem', '2.5rem'],
			},
			colors: {
				blue: '#4659bb',
				red: '#FF0000',
				white: '#FEFEFE',
				black: '#rgba(0,0,0,.3)',
				'ligth-black': 'rgba(0,0,0,.03)',
				'light-grey': '#e2e2e2',
				'dark-grey': '#78767b',
				'dark-text': '#1d1732',
				selected: '#347469',
				disabled: 'rgba(255,255,255,.3)',
				hoverBlue: '#ECF0F7',
				pressedBlue: '#E2E8F2',
				purple: '#9747FF',
			},
		},
	},
	plugins: [],
}
