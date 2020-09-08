const router = require('express').Router();
const logger = require('../utils/logger');
const Github = require('../services/Github');

router.use('/projects', async (req, res, next) => {
	logger.info(`/projects called with name: ${JSON.stringify(req.query.name)}`);
	let user = req.query.name;

	let githubService = new Github(user)
	try {
		const projects = await githubService.getProjects()
		res.json(projects);
	} catch (error) {
		next(error)
	}
	
});

module.exports = router;
