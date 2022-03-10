/**
 * Code adapted from https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/
 * Create UsersSchema to store into database, and implement UsersSchema related methods
 */
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: String,
  hash: String,
  salt: String,
});

/**
 * @param {password} password provided by user (sign up)
 * Generate salt and hash. These will later be used to authenticate login attempt
 */
UsersSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

/**
 * @param {password} password provided by user (login)
 * @returns whether the password given by user at login matches the hash of the user stored in database
 */
UsersSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

/**
 * Helps generate a JWT after authentication. 
 * @returns JWT that expires in 60 days. Contains email, id and expiry date
 */
UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

mongoose.model('Users', UsersSchema);