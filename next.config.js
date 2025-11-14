/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{
        esmExternals: true,
    },
    transpilePackages: ['nextstep'],
}
export default nextConfig
