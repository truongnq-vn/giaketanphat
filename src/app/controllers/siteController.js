const Products = require('../models/Products');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class siteController {
  index(req, res, next) {
    Products.find({})
    
    .then(products => {
      res.render('home', {
        products : mutipleMongooseToObject(products)
      });
    })
    .catch(next);

  }
  sitemap(req, res) {
    res.render('');
  }
}
module.exports = new siteController();
