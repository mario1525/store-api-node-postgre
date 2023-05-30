const express = require('express');

const productsRouter = require('./products.routes');
const categoriesRouter = require('./categories.routes');
const usersRouter = require('./users.routes');
const ordenRouter = require('./orden.routes');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/orden', ordenRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
