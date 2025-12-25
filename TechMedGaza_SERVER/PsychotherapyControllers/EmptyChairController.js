
const MainController = require('./mainController');

class EmptyChairController extends MainController {
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

            
        });
    }



}


module.exports = EmptyChairController;
