const express = require('express');
const router = express.Router();
const serviceUsers = require('./../services/users.servis');
const Users = new serviceUsers();
const validatorHandler = require('../middlewares/validator.handler');
const { createUSerSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schemas');


// retorna todos los usarios
router.get('/', async (req, res, next) =>{
  try{
    const user = await Users.find();
    res.json(user);
  }catch(error){
    next(error);
  }
});

//retona un solo usuario
router.get('/:id', validatorHandler(getUserSchema, 'params'),
 (req, res, next) => {
  try {
    const { id } = req.params;
  res.json(Users.findone(id));
  }catch(error){
    next(error);
  }
})

//crear usario
router.post('/', validatorHandler(createUSerSchema,'body'),
 (req, res, next) =>{
  try{
    const body = req.body;
  const newUser = Users.create(body);
  res.status(201).json(newUser);
  }catch(error){
    next(error);
  }
})

//actualizar usuarios
router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
 (req, res, next) =>{
  try{
    const {id} = req.params;
  const body = req.body;
  const user = Users.update(id, body );
  res.json(user);
  } catch(error){
    next(error);
  }
})

//eliminar usarios
router.delete('/:id',
validatorHandler(getUserSchema, 'params'),
 (req, res, next ) =>{
  try{
    const {id} = req.params;
  const body = req.body;
  const user = Users.update(id, body );
  res.json(user);
  }catch(error){
    next(error);
  }

})

module.exports = router;
