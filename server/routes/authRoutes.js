const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, getProfile} = require('../controllers/authController');

router.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
     })
);

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);


module.exports = router
