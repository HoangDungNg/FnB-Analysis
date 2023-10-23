/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {};
const withVideos = require('next-videos');
const withSvgr = require('next-plugin-svgr');

module.exports = nextConfig;
module.exports = withVideos();
module.exports = withSvgr();
