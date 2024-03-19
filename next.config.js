/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/add-contact:path*',
                destination: 'https://api.hubapi.com/crm/v3/objects/contacts',
            },
        ]
    },
}

module.exports = nextConfig
