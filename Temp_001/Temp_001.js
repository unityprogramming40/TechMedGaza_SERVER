
const MainController = require('../MainConrtollers/mainController');

class TempController extends MainController {
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
            /*
            socket.on('app_opened', (data) => {
                this.SendSocketALL(socket, 'app_opened', data, 'app_opened sent', 'textUpdate failed',false);
                console.log(data.text)
            });
            */
    }



}


module.exports = TempController;
