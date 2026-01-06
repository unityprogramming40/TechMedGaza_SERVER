const MainController = require('../MainConrtollers/mainController');

class GreenLegacy extends MainController {
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

        socket.on('show_animal', (data) => {
            this.SendSocketBroadcast(socket, "show_animal", data, "show_animal sent", "show_animal failed")
        });

        socket.on('animal_audio', (data) => {
            this.SendSocketBroadcast(socket, "animal_audio", data, "animal_audio sent", "animal_audio failed", false)
        });

    }
}

module.exports = GreenLegacy;
