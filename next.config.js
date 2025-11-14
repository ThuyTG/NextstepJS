/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    experimental:{
        esmExternals: true,
    },
    transpilePackages: ['nextstep'],
}
export default nextConfig
