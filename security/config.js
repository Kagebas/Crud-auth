const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/usuario_model.js');


validPassword = (password) => {
    return ( this.password === password);
},

passport.use(new LocalStrategy(
    function(username, password, done) {
      Usuario.findOne({ username: username, password: password}, function (err, user) {
        if (err) { 
            return done(err);
        }if (!user) { 
            return done(null, false);
        }  return done(null, user);
      });
    }
));


module.exports = passport;