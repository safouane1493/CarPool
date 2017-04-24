const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//User Schema
const UserSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    idcard : {
        type: Number
    },
    birthday : {
        type: Date
    },
    phone : {
        type: Number
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id,callback);
}

module.exports.getUserByEmail = function(email, callback){
    const query = {email : email}
    User.findOne(query,callback);
}
module.exports.addUser = function(newUser, callback){
    newUser.save(callback);
    
}