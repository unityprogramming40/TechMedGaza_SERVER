const MainController = require('../MainConrtollers/mainController');

class EmotionsTreeManager extends MainController {
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

        socket.on('tree_show_input', (data) => {
            this.SendSocketBroadcast(socket, 'tree_show_input', data, 'tree_show_input sent', 'tree_show_input failed');
        });

        socket.on('tree_hide_input', (data) => {
            this.SendSocketBroadcast(socket, 'tree_hide_input', data, 'tree_hide_input sent', 'tree_hide_input failed');
        });

        socket.on('tree_add_part', (data) => {
            this.SendSocketBroadcast(socket, 'tree_add_part', data, 'tree_add_part sent', 'tree_add_part failed');
        });

        socket.on('tree_clear_tree', (data) => {
            this.SendSocketBroadcast(socket, 'tree_clear_tree', data, 'tree_clear_tree sent', 'tree_clear_tree failed');
        });
        socket.on('SyncObject', (data) => {
            this.SendSocketBroadcast(socket, "SyncObject", data, "SyncObject sent", "SyncObject failed", false);
        });
    }
}

module.exports = EmotionsTreeManager;
