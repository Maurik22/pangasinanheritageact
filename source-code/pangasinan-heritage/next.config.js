/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/mau" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mau/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/mau" : ""
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
