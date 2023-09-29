const User = require('../models/user');

const test = (req, res) => {
    res.json('Test is working');
}

const registerUser = async (req, res) => {
    res.json('Register user is working');
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.json
            ({ 
                error: 'Please enter all fields'
        })
        };
        if(password.length < 6){
            return res.json({
                error: 'Password must be at least 6 characters'
            })
        };
        const exist = await User.findOne({email: email});
        if(exist){
            return res.json({
                error: 'Email already exists'
            })
        } 
        const user = await User.create({name, email, password});
        res.json(user);

    } catch(err){
        console.log(err);
    }
}
module.exports = {
    test, registerUser
}