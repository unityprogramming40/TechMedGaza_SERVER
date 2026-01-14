const http = require('http');
const socketIo = require('socket.io');
const expressApp = require('./app');

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

// Green Legacy Controllers
const GreenLegacy = require('./GreenLegacyControlers/GreenManager');

// Fair War Controllers
const FairWarManager = require('./FairWarControlers/FairWarManager');

// Emotions Tree Controllers
const EmotionsTreeManager = require('./EmotionsTree/EmotionsTreeManager');

const ResturantController = require('./Resturant/ResturantController');
const SpeakController = require('./Resturant/SpeakController');
const FairSoulationController = require('./Resturant/FairSoulationController');

const app = expressApp();
const server = http.createServer(app);
const io = socketIo(server);

const controllers = [

    // Initialize Main Controllers
    new PlayerController(io),
    new AdminController(io),

    // Initialize Psychotherapy Controllers
    new EmptyChairController(io),
    new CinemaController(io),
    new OceanController(io),
    new DeepBreathController(io),
    new GroundingController(io),
    new WhiteboardController(io),

    // Initialize Green Legacy Controller
    new GreenLegacy(io),
    // Initialize Fair War Controller
    new FairWarManager(io),
    // Initialize Emotions Tree Controller
    new EmotionsTreeManager(io),


    // Initialize ResturantController
    new ResturantController(io),
    // Initialize SpeakController
    new SpeakController(io),
    
    // Initialize SpeakController
    new FairSoulationController(io),
];

io.on('connection', (socket) => {
    controllers.forEach((c) => c.bind && c.bind(socket));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
