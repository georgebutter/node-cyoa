// Data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Encryption
const bcrypt = require('bcrypt');

// Data Models
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  stamina: {
    type: Number,
    default: 24,
  },
  skill: {
    type: Number,
    default: 12,
  },
  luck: {
    type: Number,
    default: 12
  },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  step: {
    type: Schema.Types.ObjectId,
    ref: 'Step',
  }
});

// Authenticate input against database
UserSchema.statics.authenticate = function (username, password, callback) {
  User.findOne({ username: username })
  .exec(function (err, user) {
    if (err) {
      return callback(err)
    } else if (!user) {
      var err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    })
  });
}

// Hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var User = mongoose.model('User', UserSchema);
module.exports.User = User;
