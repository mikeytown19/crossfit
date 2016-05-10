
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wodSchema = new Schema ({
  title: {type: String, required: false},
  type: {type: String, required: false},
  day: {type: String, required: false},
  warmup: {type: String,default:"Warmup",required: false},
  warmupBody: {type: String, required: false},
  skills: {type: String,default:"Skills / Strength", required: false},
  skillsBody: {type: String, required: false},
  wodBody: {type: String, required: false},
  metcon: {type: String, default:"Metcon", required: false},
  pic:{type:String, required:false},
  date: { type: Date, default: Date.now },
  comments: [{
      body: String,
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }]
}, {timestamps: true})



module.exports = mongoose.model('wod', wodSchema);
