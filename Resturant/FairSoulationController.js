
const MainController = require('../MainConrtollers/mainController');

class FairSoulationController extends MainController {
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

            socket.on('New Title', (data) => {
                this.SendSocketALL(socket, 'New Title', data, 'New Title sent', 'New Title failed');
                console.log(data)
            });

            
            socket.on('Sync Object Mesh', (data) => {
                this.SendSocketBroadcast(socket, 'Sync Object Mesh', data, 'Sync Object Mesh sent', 'Sync Object Mesh failed');
                console.log(data)
            });
    }
}


module.exports = FairSoulationController;
