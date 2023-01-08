const express = require('express');
const router = express.Router();


//pidiendo dos parametros
router.get('/:categoryId/productos/:profuctId', (req, res ) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
