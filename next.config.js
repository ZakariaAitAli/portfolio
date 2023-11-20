/** @type {import('next').NextConfig} */

const nextConfig = {}


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/login',
            },
        ];
    },
};


