
const MainController = require('../MainConrtollers/mainController');

class OceanController extends MainController {
    /**
      * @param {object} io - The Socket.IO instance.
      */
    constructor(io) {
        super(io);
    }
    /**
     * Called from server.js inside the SINGLE io.on('connection', ...)
     * @param {object} socket - the connected socket
     */
    bind(socket) {
        socket.on('show_land', (data) => {
            this.SendSocketBroadcast(socket, "show_land", data, "show_land sent", "show_land failed")
        });

        socket.on('move_ship', (data) => {
            this.SendSocketBroadcast(socket, "move_ship", data, "move_ship sent", "move_ship failed")
        });
        socket.on('SyncBoat', (data) => {
            this.SendSocketBroadcast(socket, "SyncBoat", data, "SyncBoat sent", "SyncBoat failed")
        });

        socket.on('ocean_audio', (data) => {
            this.SendSocketBroadcast(socket, "ocean_audio", data, "ocean_audio sent", "ocean_audio failed", false)
        });
    }
}


module.exports = OceanController;
