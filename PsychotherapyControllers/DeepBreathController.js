const MainController = require('../MainConrtollers/mainController');

class DeepBreathController extends MainController {
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
        socket.on('deep_select_path', (data) => {
            this.SendSocketBroadcast(socket, 'deep_select_path', data, 'deep_select_path sent', 'deep_select_path failed', false);
        });

        socket.on('deep_set_time', (data) => {
            this.SendSocketBroadcast(socket, 'deep_set_time', data, 'deep_set_time sent', 'deep_set_time failed', false);
        });

        socket.on('deep_move', (data) => {
            this.SendSocketBroadcast(socket, 'deep_move', data || { ok: true }, 'deep_move sent', 'deep_move failed', false);
        });

        socket.on('deep_restart', (data) => {
            this.SendSocketBroadcast(socket, 'deep_restart', data || { ok: true }, 'deep_restart sent', 'deep_restart failed', false);
        });

    }
}

module.exports = DeepBreathController;
