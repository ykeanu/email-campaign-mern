const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define informatoin within record
const userSchema = new Schema({
  googleId: String
});

// Tells mongo we need to create or use collection of users
mongoose.model('users', userSchema);
