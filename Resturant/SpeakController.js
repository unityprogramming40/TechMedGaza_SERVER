
const MainController = require('../MainConrtollers/mainController');

class SpeakController extends MainController {
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

            socket.on('textUpdate', (data) => {
                this.SendSocketALL(socket, 'textUpdate', data, 'textUpdate sent', 'textUpdate failed');
                console.log(data)
            });

            
            socket.on('clab', (data) => {
                this.SendSocketALL(socket, 'clab', data, 'clab sent', 'clab failed');
                console.log(data)
            });

    }



}


module.exports = SpeakController;
