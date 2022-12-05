// express.router helps with middleware routing 
const router = require('express').Router();

const routeNotes = require('./routeNotes');

// uses middleware function
router.use(routeNotes);

// mapping router
module.exports = router;
