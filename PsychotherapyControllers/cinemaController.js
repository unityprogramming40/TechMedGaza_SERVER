const MainController = require('./mainController');

class CinemaController extends MainController {
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

        socket.on('vidoes_select', (data) => {
            this.SendSocketBroadcast(socket, 'vidoes_select', data, 'vidoes_select sent', 'vidoes_select failed', false);
        });

        socket.on('vidoes_start', (data) => {
            this.SendSocketBroadcast(socket, 'vidoes_start', data || { ok: true }, 'vidoes_start sent', 'vidoes_start failed', false);
        });

        socket.on('vidoes_pause', (data) => {
            this.SendSocketBroadcast(socket, 'vidoes_pause', data || { ok: true }, 'vidoes_pause sent', 'vidoes_pause failed', false);
        });

        socket.on('vidoes_resume', (data) => {
            this.SendSocketBroadcast(socket, 'vidoes_resume', data || { ok: true }, 'vidoes_resume sent', 'vidoes_resume failed', false);
        });

        socket.on('vidoes_replay', (data) => {
            this.SendSocketBroadcast(socket, 'vidoes_replay', data || { ok: true }, 'vidoes_replay sent', 'vidoes_replay failed', false);
        });

        //---------------Photos-----------------

        socket.on('photo_category_select', (data) => {
            this.SendSocketBroadcast(socket, 'photo_category_select', data, 'photo_category_select sent', 'photo_category_select failed', false);
        });

        socket.on('photo_show', (data) => {
            this.SendSocketBroadcast(socket, 'photo_show', data || { ok: true }, 'photo_show sent', 'photo_show failed', false);
        });

        socket.on('photo_hide', (data) => {
            this.SendSocketBroadcast(socket, 'photo_hide', data || { ok: true }, 'photo_hide sent', 'photo_hide failed', false);
        });

        socket.on('photo_next', (data) => {
            this.SendSocketBroadcast(socket, 'photo_next', data || { ok: true }, 'photo_next sent', 'photo_next failed', false);
        });

        socket.on('photo_prev', (data) => {
            this.SendSocketBroadcast(socket, 'photo_prev', data || { ok: true }, 'photo_prev sent', 'photo_prev failed', false);
        });

        // ---------------Voice-----------------

        socket.on('voice_select', (data) => {
            this.SendSocketBroadcast(socket, 'voice_select', data, 'voice_select sent', 'voice_select failed', false);
        });

        socket.on('voice_play', (data) => {
            this.SendSocketBroadcast(socket, 'voice_play', data || { index: -1 }, 'voice_play sent', 'voice_play failed', false);
        });

        socket.on('voice_stop', (data) => {
            this.SendSocketBroadcast(socket, 'voice_stop', data || { ok: true }, 'voice_stop sent', 'voice_stop failed', false);
        });

        socket.on('voice_resume', (data) => {
            this.SendSocketBroadcast(socket, 'voice_resume', data || { ok: true }, 'voice_resume sent', 'voice_resume failed', false);
        });

        socket.on('voice_restart', (data) => {
            this.SendSocketBroadcast(socket, 'voice_restart', data || { ok: true }, 'voice_restart sent', 'voice_restart failed', false);
        });

        //---------------FX-----------------

        socket.on('fx_select', (data) => {
            //console.log('fx_select event received with data:', data);
            this.SendSocketBroadcast(socket, 'fx_select', data, 'fx_select sent', 'fx_select failed', false);
        });

        socket.on('fx_stop', (data) => {
            //console.log('fx_stop event received with data:', data);
            this.SendSocketBroadcast(socket, 'fx_stop', data || { ok: true }, 'fx_stop sent', 'fx_stop failed', false);
        });

    }
}

module.exports = CinemaController;
