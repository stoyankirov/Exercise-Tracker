const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        //премахва whitespase-ове накрая и други
        trim: true,
        minLength: 3
    }
}, 
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;