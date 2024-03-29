const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

require('dotenv').config();

// parse requests of content-type - application/json
app.use(express.json());

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the API.' });
});

// Access API routes
app.use('/', routes);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
