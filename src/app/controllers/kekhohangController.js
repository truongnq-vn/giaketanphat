const Kekho = require('../models/Kekho');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class kekhohangController {
  index(req, res, next) {
    Kekho.find({})
    
    .then(kekhos => {
      res.render('products/ke-kho', {
        kekhos : mutipleMongooseToObject(kekhos)
      });
    })
    .catch(next);
  }

  show(req, res, next) {
    Kekho.findOne({slug: req.params.slug })
    .then(kekhos => 
        res.render('products/show-ke-kho', { kekhos: mongooseToObject(kekhos)})
    )
  }

}
module.exports = new kekhohangController();
