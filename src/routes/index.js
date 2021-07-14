const siteRouter = require('./site');
const kesieuthiRouter = require('./ke-sieu-thi');
const kekhoRouter = require('./ke-kho');
const newsRouter = require('./tin-tuc');
const hotroRouter = require('./ho-tro');
const thietbisieuthiRouter = require('./thiet-bi-sieu-thi');


function route(app) {
  app.use('/tin-tuc', newsRouter);
  app.use('/tin-tuc', newsRouter);
  app.use('/ho-tro', hotroRouter);
  app.use('/ke-sieu-thi', kesieuthiRouter);
  app.use('/ke-kho', kekhoRouter);
  app.use('/thiet-bi-sieu-thi', thietbisieuthiRouter);
  app.use('/', siteRouter);
}
module.exports = route;
