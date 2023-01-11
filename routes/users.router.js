const express = require('express');
const router = express.Router();
const serviceUsers = require('./../services/users.servis');
const Users = new serviceUsers();

// ruta con parametros opcionales
router.get('/', (req, res) =>{
  const user = Users.find();
  res.json(user);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(Users.findOne(id));
})

module.exports = router;
