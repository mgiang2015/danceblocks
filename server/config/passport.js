/**
 * Code adapted from https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/
 * All passport related configuration
 */
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

/**
 * Configure local strategy.
 * { usernameField and passwordField } options are needed because we use "email" header instead of "username"
 */
passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));