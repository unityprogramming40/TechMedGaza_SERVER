
const MainController = require('./mainController');

class GroundingController extends MainController {
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

        socket.on('SyncObject', (data) => {
            //console.log(data.ID);
            this.SendSocketBroadcast(socket, "SyncObject", data, "SyncObject sent", "SyncObject failed", false)
        });

        socket.on('_train_audio', (data) => {
            this.SendSocketBroadcast(socket, "_train_audio", data, "_train_audio sent", "_train_audio failed", false)
        });

        socket.on('_plane_audio', (data) => {
            this.SendSocketBroadcast(socket, "_plane_audio", data, "_plane_audio sent", "_plane_audio failed", false)
        });


        socket.on('_birds_audio', (data) => {
            this.SendSocketBroadcast(socket, "_birds_audio", data, "_birds_audio sent", "_birds_audio failed", false)
        });

        socket.on('_clock_audio', (data) => {
            this.SendSocketBroadcast(socket, "_clock_audio", data, "_clock_audio sent", "_clock_audio failed", false)
        });

        socket.on('_water_audio', (data) => {
            this.SendSocketBroadcast(socket, "_water_audio", data, "_water_audio sent", "_water_audio failed", false)
        });
    }
}


module.exports = GroundingController;
