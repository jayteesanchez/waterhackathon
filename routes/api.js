var Family = require('../models/Family');
var apiController = require('../controllers/apiController');

router.get('/api/families', apiController.renderFamily);
