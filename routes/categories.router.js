const express = require('express');
const router = express.Router();
const categoryservices = require('./../services/category.services');
const category = new categoryservices();
const validatorHandler = require('../middlewares/validator.handler');
const {createCategorySchema, updateCategorySchema, getCategorySchema} = require('../schemas/category.schema');

//devuelve todas las categorias
router.get('/', (req, res, next) => {
  try {
    const categories = category.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

//devuelve una sola categoria
router.get('/:id',
validatorHandler(getCategorySchema, 'params'),
 (req, res, next ) => {
  try {
    const { id } = req.params
    const catego = category.findone(id);
    res.json(catego);
  } catch (error) {
    next(error);
  }
});

//crea una nueva categoria
router.post('/',
validatorHandler(createCategorySchema, 'body'),
 (req, res, next) => {
  try {
    const body = req.body;
  const newcategory = category.create(body);
  res.status(201).json(newcategory);
  }catch(error) {
    next(error);
  }
});

//actualiza una categoria
router.patch('/:id',
//validar el id
validatorHandler(getCategorySchema, 'params'),
//validar los atributos
validatorHandler(updateCategorySchema, 'body'),
 (req, res, next) => {
  try{
    const { id } = req.params;
  const body = req.body;
  const categories = category.update(id, body);
  res.json(categories);
  } catch(error){
    next(error);
  }
});

//elmina una categoria
router.delete('/:id',
validatorHandler(getCategorySchema, 'params'),
 (req, res, next) => {
  try{
    const { id } = req.params;
  const categories = category.delete(id);
  res.json(categories);
  }catch(error){
    next(error);
  }
});

module.exports = router;
