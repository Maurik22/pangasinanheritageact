/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/pangasinan-heritage" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/pangasinan-heritage/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/pangasinan-heritage" : ""
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
