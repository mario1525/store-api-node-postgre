const express = require('express');
const router = express.Router();

const AuthServis = require('../services/auth.services');
const servis = new AuthServis();

router.post('/login', async (req, res, next) => {
  try {
    const { body } = req;
    res.json(await servis.singToken(body));
  } catch (error) {
    next(error);
  }
});
