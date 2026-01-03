const MainController = require('../PsychotherapyControllers/mainController');

class PlayerController extends MainController {
    /**
     * @param {object} io - The Socket.IO instance.
     */
    constructor(io) {
        super(io);
        this.currentScene = "";
    }
    /**
     * Called from server.js inside the SINGLE io.on('connection', ...)
     * @param {object} socket - the connected socket
     */
    bind(socket) {

        this.Debug('New client connected to PlayerController.');
        if (this.currentScene && this.currentScene !== "") {
            this.Debug(`Loading saved scene for new connection: ${this.currentScene}`);
            this.SendSocketEmit(socket, "app_opened", { scene: this.currentScene }, "app_opened_late", "app_opened_late failed"
            );
        }

        socket.on('app_opened', (data) => {
            const scene = data?.scene ?? "";
            this.Debug('app_opened :' + scene);
            this.currentScene = scene;
            this.SendSocketBroadcast(socket, "app_opened", { scene }, "app_opened", "app_opened failed", false);
        });
    }
}

module.exports = PlayerController;
