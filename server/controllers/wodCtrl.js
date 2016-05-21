var Wod = require("../models/wod.js")



module.exports = {
addWod: function(req, res){
    var wod = new Wod(req.body);
    wod.save(function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
},
getAllWods: function (req, res) {
 Wod.find({}, function (err, resp) {
         if (err) {
             res.status(500).json(err);
         } else {
             res.status(200).json(resp);
         }
     });
},
updateWod: function(req, res, next) {
  Wod.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
    if (err) res.status(500).json(err);
    else res.status(200).json(response);
  })
 },
 deleteWod: function (req, res) {
       var id = req.params.id;
       Wod.findByIdAndRemove(id, function (err, resp) {
           if (err) {
               res.status(500).json(err);
           } else {
               res.status(200).json(resp);
           }
       });
   },  deleteComment: function(req, res, next) {
      var id = req.params.id;
      var status = req.params.status;
      Status.findByIdAndUpdate(status, {$pull: {comments: {_id: id}}}, function(err, response) {
          err ? res.status(500).send(err) : res.status(200).send(response)
      })
  },

    getWod: function (req, res) {
        var id = req.params.id;
        Wod.findById(id, function (err, resp) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(resp);
                }
            });
    }, addComment: function(req, res, next) {
     Wod.findById(req.body.postId, function(err, post){
       if (err) {
         res.status(500).json(err);
       }else {
         post.comments.push({user: req.body.userId, comment: req.body.newComment});
         post.save(function(err, data) {
           if (err){
             res.status(500).send(err);
           }else {
             res.status(200).json(data);
           }
         })
       }
     })

   }

}
