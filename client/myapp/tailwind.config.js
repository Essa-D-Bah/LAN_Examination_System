/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Mulish', 'sans-serif'],
				'mono': ['Rokkitt', 'monospace'],
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};

