const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser} = require('../controllers/authController');

router.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
    
    // accessControlAllowOrigin: '*',
    // accessControlAllowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
    // accessControlAllowHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    })
);

router.get('/', test);
router.post('/register', registerUser);

module.exports = router
