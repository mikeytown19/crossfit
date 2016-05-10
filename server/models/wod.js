
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wodSchema = new Schema ({
  title: {type: String, required: false},
  body: {type: String, required: false},
  pic:{type:String, requheadired:false},
  date: { type: Date, default: Date.now },
  comments: [{
      body: String,
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }]
}, {timestamps: true})



module.exports = mongoose.model('wod', wodSchema);
