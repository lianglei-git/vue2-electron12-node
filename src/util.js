const { config } = require('dotenv')

const { join } = require('path')

const net = require('net')

config({ path: join(__dirname, '../../.env') })

const utils = {
    /**
     * Is development
     * @returns 
     */
    isDev: () => process.env.NODE_ENV == 'development',
    portInUse: (port, callback) => {
        var server = net.createServer(function (socket) {
            socket.write('Echo server\r\n');
            socket.pipe(socket);
        });

        server.listen(port, '127.0.0.1');
        server.on('error', function (e) {
            callback(true);
        });
        server.on('listening', function (e) {
            server.close();
            callback(false);
        });
    }
}
module.exports = utils