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
    }

}
