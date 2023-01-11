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
  res.status(201).json(
    {
      message: 'created',
      data: body
    }
  )
})

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json(
    {
      message: 'update',
      data: body,
      id,
    }
  )
})

router.delete('/:id', (req, res) =>{
  const {id} = req.params;

  res.json(
    {
      message: 'delete',
      id,
    }
  )
})


module.exports= router;
