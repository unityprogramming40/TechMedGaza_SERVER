
const MainController = require('../PsychotherapyControllers/mainController');

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

            // SyncPlayerE
            
        });
    }



}


module.exports = ResturantController;
