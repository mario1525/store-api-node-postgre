const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastname = Joi.string().min(3).max(15);
const Email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] },
});
const password = Joi.string().min(8);
const cell = Joi.number();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  cell: cell.required(),
  user: {
    Email: Email.required(),
    password: password.required(),
  },
});

const updateCustomerSchema = Joi.object({
  name,
  lastname,
  cell,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
