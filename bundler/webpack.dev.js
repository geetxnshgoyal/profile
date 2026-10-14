const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const os = require('os')
const portFinderSync = require('portfinder-sync')

const getLocalIp = () => {
    const interfaces = os.networkInterfaces()
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            // Note: In newer Node.js versions net.family can be a string or number, so check for both.
            if ((net.family === 'IPv4' || net.family === 4) && !net.internal) {
                return net.address
            }
        }
    }
    return '0.0.0.0'
}

const infoColor = (_message) => {
    return `[1m[34m${_message}[39m[22m`
}

module.exports = merge(commonConfiguration, {
    stats: 'errors-warnings',
    mode: 'development',
    infrastructureLogging: {
        level: 'warn',
    },
    devServer: {
        // `local-ip` binds the LAN address *only*, so http://localhost:8080
        // is refused even though the banner below advertises it. Binding all
        // interfaces makes both URLs actually work.
        host: '0.0.0.0',
        port: portFinderSync.getPort(8080),
        open: true,
        server: 'http',
        allowedHosts: 'all',
        hot: false,
        watchFiles: ['src/**', 'static/**'],
        static: {
            watch: true,
            directory: path.join(__dirname, '../static'),
        },
        client: {
            logging: 'none',
            overlay: true,
            progress: false,
        },
        // `onAfterSetupMiddleware` was removed in webpack-dev-server v5.
        onListening: function (devServer) {
            const port = devServer.server.address().port
            const localIp = getLocalIp()
            const domain1 = `http://${localIp}:${port}`
            const domain2 = `http://localhost:${port}`

            console.log(
                `Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`
            )
        },
    },
})
