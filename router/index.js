const router = require('express').Router();
const logger = require('../utils/logger');
const Github = require('../services/Github')

router.use('/projects', (req, res) => {
	logger.info(`/projects called with name: ${JSON.stringify(req.query.name)}`);
	let user = req.query.name;
	let githubService = new Github(user)
	res.json(githubService.getProjects());
});

module.exports = router;
