
const MainController = require('../PsychotherapyControllers/mainController');

class AdminController extends MainController {
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

            this.Debug('Admin connected.');

            socket.on('Sync Player', (/** @type {PlayerTransform} */ data) => {
                this.SendSocketBroadcast(socket, "Sync Player",  data, "player Synced", "Player Sync failed")
            });
        });
    }



}


module.exports = AdminController;
