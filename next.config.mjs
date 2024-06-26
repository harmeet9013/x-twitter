/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXTAUTH_SECRET: "g+pz2b4kYkaqCj1BQN7YOiqf5gqIf/N/Sbe5PP30lSo=",
        NEXTAUTH_URL: "http://localhost:3000",
        REDIRECT_URL: "http://localhost:3000",
        BASE_URL: "http://localhost:3000",
    },
};

export default nextConfig;
