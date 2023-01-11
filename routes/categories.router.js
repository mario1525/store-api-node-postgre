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

module.exports = router;
