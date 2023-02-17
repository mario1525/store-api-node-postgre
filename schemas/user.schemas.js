const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const lastname = Joi.string().min(3).max(15);
const Email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const cell =Joi.number();



const createUSerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  Email: Email.required(),
  cell: cell.required()
});

const updateUserSchema = Joi.object({
  name: name,
  lastname: lastname,
  Email: Email,
  cell: cell
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {createUSerSchema, updateUserSchema, getUserSchema }

