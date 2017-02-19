var express = require('express');
var router = express.Router();
const controllerEvent = require('../controllers/controller.event');

/* GET event listing. */
router.get('/', controllerEvent.getAllEvent);
/* POST event data */
router.post('/', controllerEvent.addEvent);

module.exports = router;
