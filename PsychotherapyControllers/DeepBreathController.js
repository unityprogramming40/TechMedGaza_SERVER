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
            console.log('deep_select_path received:', data);
            this.SendSocketBroadcast(socket, 'deep_select_path', data, 'deep_select_path sent', 'deep_select_path failed', false);
        });

        socket.on('deep_set_time', (data) => {
            console.log('deep_set_time received:', data);
            this.SendSocketBroadcast(socket, 'deep_set_time', data, 'deep_set_time sent', 'deep_set_time failed', false);
        });

        socket.on('deep_move', (data) => {
            console.log('deep_move received:', data);
            this.SendSocketBroadcast(socket, 'deep_move', data || { ok: true }, 'deep_move sent', 'deep_move failed', false);
        });

        socket.on('deep_restart', (data) => {
            console.log('deep_restart received:', data);
            this.SendSocketBroadcast(socket, 'deep_restart', data || { ok: true }, 'deep_restart sent', 'deep_restart failed', false);
        });
        
        socket.on('forest_train_panel', (data) => {
            console.log('forest_train_panel received:', data);
            this.SendSocketBroadcast(socket, 'forest_train_panel', data, 'forest_train_panel sent', 'forest_train_panel failed', false);
        });
    }
}

module.exports = DeepBreathController;
