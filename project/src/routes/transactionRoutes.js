// src/routes/transactionRoutes.js
const express = require('express');
const TransactionService = require('../application/transactionService');

const router = express.Router();

router.post('/transaction', async (req, res) => {
  try {
    const transaction = await TransactionService.createTransaction(req.body.userId, req.body.amount, req.body.type);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/transactions/:userId', async (req, res) => {
  try {
    const transactions = await TransactionService.getTransactions(req.params.userId);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
