const Tintuc = require('../models/Tintuc');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class tintucController {
  index(req, res, next) {
    Tintuc.find({})
    
    .then(tintucs => {
      res.render('tin-tuc-hai', {
        tintucs : mutipleMongooseToObject(tintucs)
      });
    })
    .catch(next);
  }

  show(req, res, next) {
    Tintuc.findOne({slug: req.params.slug })
    .then(tintucs => 
        res.render('products/show-tintuc', { tintucs: mongooseToObject(tintucs)})
    )
  }

}
module.exports = new tintucController();
