
const MainController = require('../MainConrtollers/mainController');

class EmptyChairController extends MainController {
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
        socket.on('trees', (data) => {
            this.SendSocketBroadcast(socket, "trees", data, "trees sent", "trees failed", false)
        });


        socket.on('birds_audio', (data) => {
            this.SendSocketBroadcast(socket, "birds_audio", data, "birds_audio sent", "birds_audio failed", false)
        });


        socket.on('wind_audio', (data) => {
            this.SendSocketBroadcast(socket, "wind_audio", data, "wind_audio sent", "wind_audio failed", false)
        });

        socket.on('charachter', (data) => {
            this.SendSocketBroadcast(socket, "charachter", data, "charachter sent", "charachter failed", false)
        });

    }
}


module.exports = EmptyChairController;
