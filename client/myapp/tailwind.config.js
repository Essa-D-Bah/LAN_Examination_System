/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow Condensed', 'sans-serif'],
				mono: ['Montserrat', 'monospace'],
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			},
			colors: {
				'lt-blue': '#4451A0',
				'dk-blue': '#134084',
			},
		},
	},
	plugins: [],
};

