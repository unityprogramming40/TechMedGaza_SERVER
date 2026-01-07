
const MainController = require('../MainConrtollers/mainController');

class SpeakController extends MainController {
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

            socket.on('textUpdate', (data) => {
                this.SendSocketALL(socket, 'textUpdate', data, 'textUpdate sent', 'textUpdate failed');
                console.log(data)
            });

            
            socket.on('clab', (data) => {
                this.SendSocketALL(socket, 'clab', data, 'clab sent', 'clab failed');
                console.log(data)
            });

        });
    }



}


module.exports = SpeakController;
