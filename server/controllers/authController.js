const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {hashPassword, comparePassword} = require('../helpers/auth'); 

const test = (req, res) => {
    res.json('Test is working');
}

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.json
            ({ 
                error: 'Please enter all fields'
        });
        }
        if(password.length < 6){
            return res.json({
                error: 'Password must be at least 6 characters',
            });
        }
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error: 'Email already exists'
            });

        } 
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        });
        return res.json(user);

    } catch(err){
        console.log(err);
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email});
        if (!user) {
            return res.json({
                error: 'No User Found'
            });
        }

        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign(
                { email: user.email, id: user._id, user: user.name },
                process.env.JWT_SECRET,
                (err, token) => {
                    if (err) throw err;  // Handle the error
                    res.cookie('token', token).json(user);
                }
            );
        } else {
            res.json({
                error: 'Password does not match'
            });
        }
    } catch (error) {
        console.log(error);
        res.json({ error: 'An error occurred during login' });
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user);
        })      
    } else {
        res.json({error: 'No token found'})
    }
}

module.exports = {
    test, 
    registerUser, 
    loginUser,
    getProfile
    
}