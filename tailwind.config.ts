import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bg: '#151614',
				ink: '#e6e2d8',
				soft: '#a9a59b',
				muted: '#7d7a72',
				dim: '#5c5a54',
				sep: '#4a4843',
				moss: '#cfe3b0',
				panel: '#1b1c19',
				line: '#2a2c27',
				rule: '#23251f',
				row: '#262822'
			},
			fontFamily: {
				mono: ['var(--font-plex)', 'ui-monospace', 'monospace']
			},
			maxWidth: {
				page: '1040px'
			}
		}
	},
	plugins: []
};

export default config;
