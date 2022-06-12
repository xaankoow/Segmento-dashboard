module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
				'4xl':'0px 4px 8px rgba(0, 0, 0, 0.14)'
			  }
		},
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' }
			// => @media (max-width: 639px) { ... }
		},
		colors: {
			lightGray: '#d3d5e2',
			gray: '#7D7D7D',
			yellow:'#ffce47',
			blue:'#0071ff',
			dds:'#0071ff',
			red:'#F35242'
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
            'small':'.5rem'
		}
	},
	plugins: []
};
