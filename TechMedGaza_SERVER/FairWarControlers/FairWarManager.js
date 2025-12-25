const MainController = require('../PsychotherapyControllers/mainController');

class FairWarManager extends MainController {
    /**
     * @param {object} io - The Socket.IO instance.
     */
    constructor(io) {
        super(io);
        this.initializeSocketEvents(io);
    }
    /**
     * Initializes Socket.IO event listeners for player-related events.
     * @param {object} io - The Socket.IO instance.
     */
    initializeSocketEvents(io) {
        io.on('connection', (socket) => {

            socket.on('show_Modle', (data) => {
                this.SendSocketBroadcast(socket, "show_Modle", data, "show_Modle sent", "show_Modle failed")
            });
            
            socket.on('airplan_audio', (data) => {
                this.SendSocketBroadcast(socket, "airplan_audio", data, "airplan_audio sent", "airplan_audio failed", false)
            });

        });
    }
}

module.exports = FairWarManager;
