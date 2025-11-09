const express = require('express');
const { rootController, getSampleDataController } = require('../controllers/controller');
const { registerUser, loginUser } = require('../controllers/user_controller');
const { submitSurvey } = require('../controllers/form.controller');
const router = express.Router();

// dummy route to test server
router.get('/', rootController);
// route to get sample data
router.get('/getSampleData', getSampleDataController);
// user routes to sign up
router.post('/signup', registerUser);
// user route to login
router.post('/login', loginUser);
// route to submit survey form
router.post("/submit", submitSurvey);

module.exports = router;

