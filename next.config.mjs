/** @type {import('next').NextConfig} */
const nextConfig = {
	// Fully static site: `next build` writes plain HTML to build/ (see distDir), which the
	// deploy workflows rsync to the server and upload to GitHub Pages.
	output: 'export',
	// work/index.html rather than work.html next to a work/ folder, so any
	// static server resolves /work without special rules.
	trailingSlash: true,
	// Cloudflare Pages is configured to publish build/, as it was under SvelteKit.
	distDir: 'build',
	images: { unoptimized: true }
};

export default nextConfig;
