const express = require('express');
const router = express.Router();
const categoryservices = require('./../services/category.services');
const category = new categoryservices();

//pidiendo dos parametros
router.get('/', (req, res ) =>{
  const categories = category.find();
  res.json(categories);
});

router.get('/:id', (req, res) =>{
  const {id} = req.params;
  const catego = category.findone(id);
  res.json(catego);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newcategory = category.create(body);
  res.status(201).json(newcategory);
});

router.patch('/:id', (req, res) => {
  const {id } = req.params;
  const body = req.body;
  const categories = category.update(id, body);
  res.json(categories);
});

router.delete('/:id', (req, res) => {
  const {id } = req.params;
  const categories = category.delete(id);
  res.json(categories);
})

module.exports = router;
