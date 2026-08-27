const MainController = require('../MainConrtollers/mainController');

class ResturantController extends MainController {
    /**
     * @param {object} io - The Socket.IO instance.
     */
    constructor(io) {
        super(io);
    }

    /**
     * Initializes Socket.IO event listeners for player-related events.
     * @param {object} socket - The Socket.IO instance.
     */
    bind(socket) {

        socket.on('New Customer', (data) => {
            this.SendSocketALL(socket, 'New Customer', data, 'New Customer sent', 'New Customer failed');
            console.log(data)
        });

        socket.on('next sentence', (data) => {
            this.SendSocketALL(socket, 'next sentence', data, 'next sentence sent', 'next sentence failed');
            console.log(data)
        });

        socket.on('repeat sentence', (data) => {
            this.SendSocketALL(socket, 'repeat sentence', data, 'repeat sentence sent', 'repeat sentence failed');
            console.log(data)
        });

        socket.on('scenario', (data) => {
            this.SendSocketBroadcast(socket, 'scenario', data, 'scenario sent', 'scenario failed');
        });

        socket.on('reset', (data) => {
            this.SendSocketALL(socket, 'reset', data, 'reset sent', 'reset failed');
            console.log(data)
        });

    }
}


module.exports = ResturantController;