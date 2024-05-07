/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/profile",
                destination: "/profile/personal-information",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
