const router = require('express').Router();
const logger = require('../utils/logger');
const Github = require('../services/Github');
const APIError = require('../utils/APIError')

router.get('/projects', async (req, res, next) => {
	let user = req.query.username;
	logger.info(`/projects called with name: ${JSON.stringify(req.query.username)}`);
	if (!user){
		const err = new APIError(400, 'username was not found in the request')
		next(err)
		return 
	}
	let githubService = new Github(user)
	try {
		const projects = await githubService.listProjects()
		res.json(projects);
	} catch (error) {
		const err = new APIError(500, `Failed to fetch data for user ${user}`)
		next(err)
		return
	}
});

module.exports = router;
