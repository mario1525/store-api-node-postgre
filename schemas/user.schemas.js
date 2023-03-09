const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(15);
const lastname = Joi.string().min(3).max(15);
const Email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const password = Joi.string().min(8);
const cell =Joi.number();



const createUSerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  Email: Email.required(),
  password: password.required(),
  cell: cell.required()
});

const updateUserSchema = Joi.object({
  name: name,
  lastname: lastname,
  Email: Email,
  password: password,
  cell: cell
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {createUSerSchema, updateUserSchema, getUserSchema }

