const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('./utils/logger');
const APIError = require('./utils/APIError')

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());

app.use('/', require('./router'));

app.use((err, req, res, next) => {
	if (err !== null) {
		if (err instanceof APIError) {
			res.status(err.statusCode).json({type: 'error', message: err.message})
		}
		logger.error(err.message)
	}
});

app.use((req, res) => {
	const err = new APIError(404, 'Not Found');
	res.status(err.statusCode).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
});

module.exports = app;
