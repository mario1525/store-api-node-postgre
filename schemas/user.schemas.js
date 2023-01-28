const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const Email = Joi.string()
.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });


const createUSerSchema = Joi.object({
  name: name.required(),
  Email: Email.required(),

});

const updateUserSchema = Joi.object({
  name: name,
  Email: Email,

});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {createUSerSchema, updateUserSchema, getUserSchema }

