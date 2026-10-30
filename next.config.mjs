/** @type {import('next').NextConfig} */
const nextConfig = {
	// Fully static site: `next build` writes plain HTML to out/, which the
	// deploy workflows rsync to the server and upload to GitHub Pages.
	output: 'export',
	// work/index.html rather than work.html next to a work/ folder, so any
	// static server resolves /work without special rules.
	trailingSlash: true,
	images: { unoptimized: true }
};

export default nextConfig;
