/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "unsplash.com",
            port: "",
            pathname: "/photos/**",
        },
        {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/photo-**",
          },
    ],
  },
}


export default nextConfig;
