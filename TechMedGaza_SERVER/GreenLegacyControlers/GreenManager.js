const MainController = require('../PsychotherapyControllers/mainController');

class GreenLegacy extends MainController {
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

            socket.on('show_animal', (data) => {
                this.SendSocketBroadcast(socket, "show_animal", data, "show_animal sent", "show_animal failed")
            });

            // socket.on('animal_audio', (data) => {
            //     console.log("animal_audio received:", data);
            //     io.emit("animal_audio", data);
            // });
            socket.on('animal_audio', (data) => {
                this.SendSocketBroadcast(socket, "animal_audio", data, "animal_audio sent", "animal_audio failed", false)
            });


        });
    }
}

module.exports = GreenLegacy;
