const MainController = require('../PsychotherapyControllers/mainController');

class FairWarManager extends MainController {
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

        socket.on('show_Modle', (data) => {
            this.SendSocketBroadcast(socket, "show_Modle", data, "show_Modle sent", "show_Modle failed")
        });

        socket.on('airplan_audio', (data) => {
            this.SendSocketBroadcast(socket, "airplan_audio", data, "airplan_audio sent", "airplan_audio failed", false)
        });

    }
}

module.exports = FairWarManager;
