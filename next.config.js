/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimización: imágenes estáticas si las agregás después
  images: { unoptimized: true },
};

module.exports = nextConfig;
