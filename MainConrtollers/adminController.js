
const MainController = require('../MainConrtollers/mainController');

class AdminController extends MainController {
    /**
    * @param {object} io - The Socket.IO instance.
    */
    constructor(io) {
        super(io);
    }
    /**
     * Called from server.js inside the SINGLE io.on('connection', ...)
     * @param {object} socket - the connected socket
     */
    bind(socket) {

        this.Debug('Admin connected.');

        socket.on('Sync Player', (/** @type {PlayerTransform} */ data) => {
            this.SendSocketBroadcast(socket, "Sync Player", data, "player Synced", "Player Sync failed", false)
        });
        socket.on('Sync Object', (data) => {
            this.SendSocketBroadcast(socket, 'Sync Object', data, 'SyncObject sent', 'SyncObject failed', false);
        });
        socket.on("genderSelected", data => {
            console.log("genderSelected received:", data);
            this.SendSocketBroadcast(socket, "genderSelected", data, "genderSelected sent", "genderSelected failed", false);

        });
        socket.on('Sync Hand Fingers', (/** @type {PlayerTransform} */ data) => {
            this.SendSocketBroadcast(socket, "Sync Hand Fingers", data, "Sync Hand Fingers Synced", "Sync Hand Fingers failed", false)
        });
    
    }
    
}


module.exports = AdminController;
