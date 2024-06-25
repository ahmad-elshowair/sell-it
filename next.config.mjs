/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.pixabay.com",
			},
			{
				protocol: "https",
				hostname: "nrjbyqihxomvszzcnrde.supabase.co",
			},
		],
	},
};

export default nextConfig;
