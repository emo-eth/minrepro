import { WebpackPluginTevm } from "@tevm/webpack-plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
	// prevent double render on dev mode, which causes 2 frames to exist
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				hostname: "*",
				protocol: "http",
			},
			{
				hostname: "*",
				protocol: "https",
			},
		],
	},
	webpack: (config) => {
		config.plugins.push(new WebpackPluginTevm());
		return config;
	},
};

export default nextConfig;
