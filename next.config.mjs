/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXTAUTH_SECRET: "LM5ty8oTuel2FyHClWkV7YFWhuqhiCk2",
        NEXTAUTH_URL: "http://localhost:3000",
        REDIRECT_URL: "http://localhost:3000",
        BASE_URL: "http://localhost:3000",
    },
};

export default nextConfig;
