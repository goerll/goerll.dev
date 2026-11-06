import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bg: 'rgb(var(--bg) / <alpha-value>)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				soft: 'rgb(var(--soft) / <alpha-value>)',
				muted: 'rgb(var(--muted) / <alpha-value>)',
				dim: 'rgb(var(--dim) / <alpha-value>)',
				sep: 'rgb(var(--sep) / <alpha-value>)',
				accent: 'rgb(var(--accent) / <alpha-value>)',
				panel: 'rgb(var(--panel) / <alpha-value>)',
				line: 'rgb(var(--line) / <alpha-value>)',
				rule: 'rgb(var(--rule) / <alpha-value>)',
				row: 'rgb(var(--row) / <alpha-value>)'
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
