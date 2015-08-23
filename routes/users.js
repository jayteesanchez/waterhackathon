var express           = require('express');
var passport          = require('passport');
var router            = express.Router();
var usersController   = require('../controllers/usersController');

// show all the users
router.get('/',          usersController.listUsers);
// render the new user form
router.post('/',         usersController.createUser);
// show the user
router.get('/:id',       usersController.showUser);
// render the edit user form
router.get('/:id/edit',  usersController.editUserView);
// edit a user
router.put('/:id/',      usersController.editUser);
// delete a user
router.delete('/:id/',   usersController.removeUser);


module.exports = router;
