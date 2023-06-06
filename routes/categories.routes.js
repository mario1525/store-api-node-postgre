const express = require('express');

const router = express.Router();
const CategoryService = require('../services/category.services');

const category = new CategoryService();
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('../schemas/category.schema');

// devuelve todas las categorias
router.get('/', async (req, res, next) => {
  try {
    const data = await category.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// devuelve una sola categoria
router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const catego = await category.findone(id);
      res.json(catego);
    } catch (error) {
      next(error);
    }
  }
);

// crea una nueva categoria
router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newcategory = await category.create(body);
      res.status(201).json(newcategory);
    } catch (error) {
      next(error);
    }
  }
);

// actualiza una categoria
router.patch(
  '/:id',
  // validar el id
  validatorHandler(getCategorySchema, 'params'),
  // validar los atributos
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const categories = await category.update(id, body);
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

// actualiza una categoria
router.put(
  '/:id',
  // validar el id
  validatorHandler(getCategorySchema, 'params'),
  // validar los atributos
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const categories = await category.update(id, body);
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

// elmina una categoria
router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await category.delete(id);
      res.json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
