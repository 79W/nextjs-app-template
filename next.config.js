/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { 
        // sequelize 会报错 Module not found: Can't resolve 'pg-hstore'
        serverComponentsExternalPackages: ['sequelize'] 
    }
}

module.exports = nextConfig
