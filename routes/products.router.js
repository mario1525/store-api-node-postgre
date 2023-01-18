const express = require('express');
const productservice = require('./../services/products.servis');
const service = new productservice();
const router = express.Router();

router.get('/', async (req, res) =>{
  const products = await service.find();
 res.json(products);
});

//pidiendo un parametro
router.get('/:id', async  (req, res) => {
  const { id } = req.params;
  const product = await service.findone(id);
  res.json(product);
});

router.post('/', async  (req, res) =>{
  const body = req.body;
  const newproduct = await service.create(body);
  res.status(201).json(newproduct);
})

router.patch('/:id', async (req, res) =>{
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
