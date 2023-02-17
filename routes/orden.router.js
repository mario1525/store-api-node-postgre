const express = require('express');

const servisorden = require('./../services/orden.services');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createOrdenschema,
  updateOrdenschema,
  getOrdenschema
} = require('../schemas/orden.schema');

const service = new servisorden();
const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.get('/:id',
  validatorHandler(getOrdenschema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orden = await service.findOne(id);
      res.json(orden);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrdenschema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrden = await service.create(body);
      res.status(201).json(newOrden);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  //validar el id
  validatorHandler(getOrdenschema, 'params'),
  //validar los atributos
  validatorHandler(updateOrdenschema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const orden = await service.update(id, body);
      res.json(orden);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getOrdenschema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
