const express = require('express');
const main = express.Router();

// Sample Usage
const sampleRoute = require('./sample.routes');
main.use('/api', sampleRoute);

module.exports = main;
