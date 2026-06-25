import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un build autocontenido (.next/standalone) ideal para Docker / Dokploy.
  output: "standalone",
  reactStrictMode: true,
};

export default nextConfig;
