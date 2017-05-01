const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport= require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () =>{
    console.log('connected to database '+config.database);
});
mongoose.connection.on('r', () =>{
    console.log('error to database '+config.database);
});

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const users = require('./routes/users');

app.use('/users',users);

app.get('/',(req,res)=>{
    res.send('Invalid EndPoint');
});



app.listen(port,()=>{
    console.log('Server started on port '+port);
});




var cc ="hello i am a root";