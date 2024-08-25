// src/routes/authRoutes.js
const express = require('express');
const AuthService = require('../service/authService');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const user = await AuthService.signUp(req.body.username, req.body.password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const token = await AuthService.login(req.body.username, req.body.password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
