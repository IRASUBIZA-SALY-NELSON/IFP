const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/Registration'); // Adjust path as necessary

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email: profile.emails[0].value });
    
    if (existingUser) {
      return done(null, existingUser);
    }
    
    // If not, create a new user
    const newUser = new User({
      username: profile.displayName,
      email: profile.emails[0].value,
      // You may want to handle password differently or leave it out for Google users
      verified: true, // Consider them verified since they're using Google
    });
    
    await newUser.save();
    return done(null, newUser);
  } catch (error) {
    console.error("Error during Google authentication:", error);
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
