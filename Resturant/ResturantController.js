
const MainController = require('../MainConrtollers/mainController');

class ResturantController extends MainController {
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

            socket.on('New Customer', (data) => {
                this.SendSocketALL(socket, 'New Customer', data, 'New Customer sent', 'New Customer failed');
                console.log(data)
            });

            socket.on('NextWord', (data) => {
                this.SendSocketALL(socket, 'NextWord', data, 'NextWord sent', 'NextWord failed');
                console.log(data)
            });
        });
    }



}


module.exports = ResturantController;
