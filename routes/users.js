const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

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

    res.send('It is Authentification');
});


//Profile
router.get('/profile', (req, res, next) =>{

    res.send('It is Profile');
});

//Validate
router.get('/validate', (req, res, next) =>{

    res.send('It is Validate');
});
module.exports = router;