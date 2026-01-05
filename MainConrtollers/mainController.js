const Logger = require("../models/Logger/Logger");

/**
 * MainController handles socket communication and logging in the application.
 */
class MainController {
    /**
     * @param {object} io - The socket.io instance for managing socket connections.
     */
    constructor(io) {
        this.io = io;
        this.logger = new Logger();
        this.admin = false;
    }

    Debug(message) {
        console.log(message);
    }

    DebugError(message) {
        console.error(message);
    }

    _hasData(data) {
        return data !== undefined && data !== null;
    }

    SendSocketEmit(socket, event, data, successMessage = '', errorMessage = '', logSuccess = true) {
        if (this._hasData(data)) {
            socket.emit(event, data);
            if (logSuccess && successMessage) this.Debug(successMessage);
        } else if (errorMessage) {
            this.DebugError(errorMessage);
        }
    }

    SendSocketBroadcast(socket, event, data, successMessage = '', errorMessage = '', logSuccess = true) {
        if (this._hasData(data)) {
            socket.broadcast.emit(event, data);
            if (logSuccess && successMessage) this.Debug(successMessage);
        } else if (errorMessage) {
            this.DebugError(errorMessage);
        }
    }

    SendSocketALL(socket, event, data, successMessage = '', errorMessage = '', logSuccess = true) {
        if (this._hasData(data)) {
            socket.emit(event, data);
            socket.broadcast.emit(event, data);
            if (logSuccess && successMessage) this.Debug(successMessage);
        } else if (errorMessage) {
            this.DebugError(errorMessage);
        }
    }
}

module.exports = MainController;
