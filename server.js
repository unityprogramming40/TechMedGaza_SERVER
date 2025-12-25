
const http = require('http');
const socketIo = require('socket.io');
const expressApp = require('./app'); // Express

// Main Controllers
const PlayerController = require('./MainConrtollers/playerController');
const AdminController = require('./MainConrtollers/adminController');

// Psychotherapy Controllers
const EmptyChairController = require('./PsychotherapyControllers/EmptyChairController');
const CinemaController = require('./PsychotherapyControllers/cinemaController');
const OceanController = require('./PsychotherapyControllers/OceanController');
const DeepBreathController = require('./PsychotherapyControllers/DeepBreathController');
const WhiteboardController = require('./PsychotherapyControllers/WhiteboardController');
const GroundingController = require('./PsychotherapyControllers/GroundingController');

// GreenLegacy Controllers
const GreenLegacy = require('./GreenLegacyControlers/GreenManager');

//FairWar Controlers
const FairWarManager = require('./FairWarControlers/FairWarManager');

// Express
const app = expressApp();
const server = http.createServer(app);
const io = socketIo(server);

// Initialize Psychotherapy Controllers
new PlayerController(io);
new AdminController(io);
new EmptyChairController(io);
new CinemaController(io);
new OceanController(io);
new DeepBreathController(io);
new GroundingController(io);
new WhiteboardController(io);


// Initialize GreenLegacy Controllers
new GreenLegacy(io);

// Initialize FairWar Controlers
new FairWarManager(io);

// Run Server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
