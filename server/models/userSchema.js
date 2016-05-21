var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {type: String},
    username:{type: String, unique: false},
    email:{type: String, required: false},
    admin: {type: Boolean, default: false, required: true},
    Wods:[{time:Number,
    wod:{type: mongoose.Schema.Types.ObjectId, ref: 'wod'}
    }],
    password:{type: String, required: false},
    bio:{type: String, required:false},
    gender: String,
    profpic:{type:String, default:'http://1.bp.blogspot.com/-Tb_UK9_ePUM/U7oTNS-AnSI/AAAAAAAAPLE/2TT0ltTzqF4/s1600/default+image.jpg'},
    loc:{},
    customWod:[{
    title: {type: String, required: true},
    info: {type: String, required: false},
    score: {type: String, required: true},
    date: { type: Date, default: Date.now }
  }, {timestamps: true} ]
})

/////////////////////////////////////////
//Populate user info and messages info//
///////////////////////////////////////

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {

    done(err, isMatch);
  });
};


module.exports = mongoose.model('User', userSchema);
