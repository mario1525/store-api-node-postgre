const express = require('express');
const router = express.Router();

// ruta con parametros opcionales
router.get('/', (req, res) =>{
  const {limit , offset} = req.query;
  if(limit  && offset ){
    res.json({
      limit,
      offset,
    });
  }else{
    res.send(" sin parametros");
  }
});

module.exports = router;
