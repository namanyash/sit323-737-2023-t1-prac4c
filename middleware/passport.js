const jwt = require("jsonwebtoken");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("config");
var JwtStrategy = require("passport-jwt").Strategy;

module.exports = function (passport) {
  var opts = {};
  opts.secretOrKey = config.get("jwtSecret");
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken("");
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      if (!jwt_payload) {
        done(null, false);
      }
      console.log(jwt_payload);
      if (jwt_payload.user.id === "1234") {
        done(null, true);
      } else {
        done(null, false);
      }
    })
  );
};
