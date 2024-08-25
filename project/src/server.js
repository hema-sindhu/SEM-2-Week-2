// src/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./dataAccess/db');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const logger = require('./infrastructure/logger');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

// Define a route for '/'
app.get('/', (req, res) => {
  res.send('Welcome to the Banking Application!');
});

// Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
