const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) =>{
   let newUser = new User({
    name : req.body.name,
    lastname :req.body.lastname,
    email :req.body.email,
    password :req.body.password,
    idcard :req.body.idcard,
    birthday :req.body.birthday,
    phone :req.body.phone
});

User.addUser(newUser, (err,user) =>{
    if(err)
        res.json({success: false, msg: 'Failed'});
    else
        res.json({success: true, msg: 'succeed'});
});
});


//Authentification
router.post('/authentification', (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        
    User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({success: true, token : 'JWT '+token,
                user:{
                    id:user._id,
                    name:user.name,
                    lastname:user.lastname,
                    email:user.email,
                    password:user.password
                }
        });
            }else{
                return res.json({success: false, msg: 'wrong password'});
            }
        });
    });
});


//Profile
router.get('/profile', passport.authenticate('jwt',{session:false}) ,(req, res, next) =>{
    
    return res.json({user: req.user});
});


//Edit Profile
router.post('/editprofile', passport.authenticate('jwt',{session:false}) ,(req, res, next) =>{
    let monUser = new User({
    _id:req.body._id,
    name : req.body.name,
    lastname :req.body.lastname,
    email :req.body.email,
    password :req.body.password,
    idcard :req.body.idcard,
    birthday :req.body.birthday,
    phone :req.body.phone
});
    User.editUser(monUser, (err,user) =>{
    if(err)
        res.json({success: false, msg: 'Failed'});
    else
        res.json({success: true, msg: req.user});
        
});
});

//Validate
router.get('/validate', (req, res, next) =>{

    res.send('It is Validate');
});
module.exports = router;