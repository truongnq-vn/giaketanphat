const New = require('../models/New');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class newController {
  index(req, res, next) {
    New.find({})
    
    .then(news => {
      res.render('tin-tuc', {
        news : mutipleMongooseToObject(news)
      });
    })
    .catch(next);
  }

  show(req, res, next) {
    New.findOne({slug: req.params.slug })
    .then(news => 
        res.render('products/show-news', { news: mongooseToObject(news)})
    )
  }

}
module.exports = new newController();
