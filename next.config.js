/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/notify',
                destination: 'https://api.hubapi.com/crm/v3/objects/contacts',
            },
            {
                source: '/text-me',
                destination: 'sms:+15127206071',
            }
        ]
    },
}

module.exports = nextConfig
