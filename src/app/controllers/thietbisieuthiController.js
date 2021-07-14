const Thietbi = require('../models/Thietbi');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class thietbisieuthiController {
  index(req, res, next) {
    Thietbi.find({})
    
    .then(thietbis => {
      res.render('products/thiet-bi-sieu-thi', {
        thietbis : mutipleMongooseToObject(thietbis)
      });
    })
    .catch(next);
  }

  show(req, res, next) {
    Thietbi.findOne({slug: req.params.slug })
    .then(thietbis => 
        res.render('products/show-thiet-bi', { thietbis: mongooseToObject(thietbis)})
    )
  }

}
module.exports = new thietbisieuthiController();
