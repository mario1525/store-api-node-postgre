const express = require('express');
const app = express();
const Port = 3000;

app.get('/', (req ,res) =>{
  res.json({
    name: 'hello world'
  });
});

app.get('/productos', (req, res) =>{
  res.json([{
    name: 'producto 1',
    price: '20000',
  },
  {
    name: 'producto 2',
    price: '20000',
  }
]);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: '20000',
  });
});

app.get('/category/:categoryId/productos/:profuctId', (req, res ) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.listen(Port, () => {
  console.log('server on port' + Port);
});
