const express = require('express');
const router = express.Router();

router.get('/sample', (req, res) => {
	res.json({ message: 'Sample Route' });
});

module.exports = router;
