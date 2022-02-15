const mongoose = require('mongoose');

require('dotenv').config();

/** 
 *  Setting up database
*/

const DB_STRING = process.env.DB_STRING;
const db = mongoose.createConnection(DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

const User = db.model('User', UserSchema);

// Expose the datab
module.exports = db;