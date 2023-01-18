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

router.post('/', (req, res) =>{
  const body = req.body;
  const newUser = Users.create(body);
  res.status(201).json(newUser);
})

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  const user = Users.update(id, body );
  res.json(user);
})

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const rta = Users.delete(id);
  res.json(rta);
})

module.exports = router;
