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
            //console.log('EmotionsTreeManager tree_show_input', data);
            this.SendSocketALL(socket, 'tree_show_input', data, 'tree_show_input sent', 'tree_show_input failed');
        });

        socket.on('tree_hide_input', (data) => {
            //console.log('EmotionsTreeManager tree_hide_input', data);
            this.SendSocketALL(socket, 'tree_hide_input', data, 'tree_hide_input sent', 'tree_hide_input failed');
        });

        socket.on('tree_add_part', (data) => {
            //console.log('EmotionsTreeManager tree_add_part', data);
            this.SendSocketALL(socket, 'tree_add_part', data, 'tree_add_part sent', 'tree_add_part failed');
        });

        socket.on('tree_clear_tree', (data) => {
            //console.log('EmotionsTreeManager tree_clear_tree', data);
            this.SendSocketALL(socket, 'tree_clear_tree', data, 'tree_clear_tree sent', 'tree_clear_tree failed');
        });

        socket.on('sync_object', (data) => {
            this.SendSocketBroadcast(socket, `sync_object`, data, `sync_object_${data.objectId} sent`, `sync_object_${data.objectId} failed`);
        });
    }
}

module.exports = EmotionsTreeManager;
