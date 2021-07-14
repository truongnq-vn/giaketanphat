const Products = require('../models/Products');

const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class kesieuthiController {
  index(req, res, next) {
    Products.find({})
    
    .then(products => {
      res.render('products/ke-sieu-thi', {
        products : mutipleMongooseToObject(products)
      });
    })
    .catch(next);
  }

  show(req, res, next) {
    Products.findOne({slug: req.params.slug })
    .then(product => 
        res.render('products/show', { product: mongooseToObject(product)})
    )
  }

}
module.exports = new kesieuthiController();
