import { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})
const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
}

export default withAnalyzer(config)
