const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('./utils/logger');

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());

app.use('/', require('./router'));

app.use(async (err, req, res, next) => {
	if(err !== null){
		res.status(500).json({type: 'error', message: err.message})
		logger.error(err.message)
	}else{
		next(err)
	}
});

app.use((req, res) => {
	const err = new Error('Not Found');
	err.status = 404;
	res.status(err.status).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
});

module.exports = app;
