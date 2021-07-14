const Hotro = require('../models/Hotro');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class hotroController {
  index(req, res, next) {
    Hotro.find({})
    
    .then(hotros=> {
      res.render('ho-tro', {
        hotros: mutipleMongooseToObject(hotros)
      });
    })
    .catch(next);
  }



}
module.exports = new hotroController();
