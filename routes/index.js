const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const ordenRouter = require('./orden.router')



function routerApi(app){
 const router = express.Router();

 app.use('/api/v1',router);
 router.use('/orden', ordenRouter);
 router.use('/products', productsRouter);//ok
 router.use('/users', usersRouter);//ok
 router.use('/categories',categoriesRouter );//ok
};

module.exports = routerApi;
