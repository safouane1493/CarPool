const express = require('express');
const router = express.Router();


//Register
router.get('/register', (req, res, next) =>{

    res.send('REGISTER');
});


//Authentification
router.get('/authentification', (req, res, next) =>{

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