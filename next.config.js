/** @type {import('next').NextConfig} */

// import { withContentlayer } from "next-contentlayer/.";
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  // reactStrictMode: false, // Disable React Strict Mode
};

module.exports = withContentlayer({ ...nextConfig });
