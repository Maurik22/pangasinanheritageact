/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/pangasinanheritageact" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/pangasinanheritageact/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/pangasinanheritageact" : ""
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
