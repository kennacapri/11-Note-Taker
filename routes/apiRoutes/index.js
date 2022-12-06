// express.router helps with middleware routing 
const router = require('express').Router();

const notesRoutes = require('./noteRoutes');

// uses middleware function
router.use(notesRoutes);

// mapping router
module.exports = router;
