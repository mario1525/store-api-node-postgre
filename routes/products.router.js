const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) =>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++){
    products.push({
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price()),
      image:faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//pidiendo un parametro
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: '20000',
  });
});

module.exports= router;
