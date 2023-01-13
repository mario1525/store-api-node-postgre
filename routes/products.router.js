const express = require('express');
const productservice = require('./../services/products.servis');
const service = new productservice();
const router = express.Router();

router.get('/', (req, res) =>{
  const products = service.find();
 res.json(products);
});

//pidiendo un parametro
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findone(id);
  res.json(product);
});

router.post('/', (req, res) =>{
  const body = req.body;
  const newproduct = service.create(body);
  res.status(201).json(newproduct);
})

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id, body );
  res.json(product);
})

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const rta = service.delete(id);
  res.json(rta);
})


module.exports= router;
