/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/notify',
                destination: 'https://api.hubapi.com/crm/v3/objects/contacts',
            },
        ]
    },
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/privacy',
                destination: 'https://goal-connects.s3.amazonaws.com/Online+Privacy+Policy+(3).pdf',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
