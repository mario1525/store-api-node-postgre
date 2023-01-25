const express = require('express');
const productservice = require('./../services/products.servis');
const service = new productservice();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schemas');

router.get('/',
validatorHandler(createProductSchema, 'body'),
 async (req, res) =>{
  const products = await service.find();
 res.json(products);
});

//pidiendo un parametro
router.get('/:id',
validatorHandler(getProductSchema, 'params'),
 async  (req, res, next) => {
  try {
    const { id } = req.params;
  const product = await service.findone(id);
  res.json(product);
  }catch (error) {
    next(error);
  }
});

router.post('/', async  (req, res) =>{
  const body = req.body;
  const newproduct = await service.create(body);
  res.status(201).json(newproduct);
})

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const product = await service.update(id, body );
  res.json(product);
})

router.delete('/:id', async (req, res) =>{
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
})


module.exports= router;
