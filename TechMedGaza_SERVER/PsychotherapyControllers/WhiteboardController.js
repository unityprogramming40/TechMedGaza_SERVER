// WhiteboardController.js
const MainController = require('./mainController');

class WhiteboardController extends MainController {
  constructor(io) {
    super(io);
    this.initializeSocketEvents(io);
  }

  initializeSocketEvents(io) {
    io.on('connection', (socket) => {
        
      socket.on('SyncTools', (data) => {
        
        this.SendSocketBroadcast(socket, 'SyncTools', data, 'SyncTools sent', 'SyncTools failed', false);
      });

      socket.on('music_audio', (data) => {
        this.SendSocketBroadcast(socket, 'music_audio', data, 'music_audio sent', 'music_audio failed', false);
      });

      socket.on('wb_ui_mode', (data) => {
        this.SendSocketBroadcast(socket, 'wb_ui_mode', data, 'wb_ui_mode sent', 'wb_ui_mode failed', false);
      });

      socket.on('wb_kb_lang', (data) => {
        this.SendSocketBroadcast(socket, 'wb_kb_lang', data, 'wb_kb_lang sent', 'wb_kb_lang failed', false);
      });

      socket.on('wb_text_set', (data) => {
        this.SendSocketBroadcast(socket, 'wb_text_set', data, 'wb_text_set sent', 'wb_text_set failed', false);
      });
    });
  }
}

module.exports = WhiteboardController;
