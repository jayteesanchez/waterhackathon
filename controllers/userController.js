var passport = require('passport');
var User = require('../models/User');
var router = express.Router();
var userController = require('../controllers/userController');
var sessionsController = require('../controllers/sessionsController');

