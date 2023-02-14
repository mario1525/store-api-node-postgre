const express = require('express');
const router = express.Router();
const serviceUsers = require('./../services/users.servis');
const Users = new serviceUsers();
const validatorHandler = require('../middlewares/validator.handler');
const { createUSerSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schemas');


// ruta con parametros opcionales
router.get('/', async (req, res, next) =>{
  try{
    const user = await Users.find();
    res.json(user);
  }catch(error){
    next(error);
  }
});

router.get('/:id', validatorHandler(getUserSchema, 'params'),
 (req, res, next) => {
  try {
    const { id } = req.params;
  res.json(Users.findOne(id));
  }catch(error){
    next(error);
  }
})

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
