const PlayerTransform = require('../models/player/PlayerTransform');

const MainController = require('../PsychotherapyControllers/mainController');

class PlayerController extends MainController {
    /**
     * @param {object} io - The Socket.IO instance.
     */
    constructor(io) {
        super(io);
        
        this.currentScene = "";

        this.initializeSocketEvents(io);
    }

    /**
     * Initializes Socket.IO event listeners for player-related events.
     * @param {object} io - The Socket.IO instance.
     */
    initializeSocketEvents(io) {
        io.on('connection', (socket) => {


            this.Debug('New client connected to PlayerController.');

            if (this.currentScene && this.currentScene !== "") {
                this.Debug(`Loading saved scene for new connection: ${this.currentScene}`);
                this.SendSocketEmit(socket, "app_opened", { scene: this.currentScene }, "app_opened_late", "app_opened_late failed")
            }

            socket.on('app_opened', (data) => {
                this.Debug('app_opened :' + data.scene);

                this.currentScene = data.scene;

                this.SendSocketBroadcast(socket, "app_opened", data, "app_opened", "app_opened failed", false)
            });


        });
    }



}


module.exports = PlayerController;
