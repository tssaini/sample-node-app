const logger = require('../utils/logger');
const axios = require('axios');

const GITURL = 'https://api.github.com';

class Github {
	constructor(username) {
		this.username = username
	}

	async listProjects() {
		logger.info(`Getting projects for user: ${this.username}`)

		const response = await axios.get(`${GITURL}/users/${this.username}/repos`);
		const results = []
		for (const proj of response.data) {
			results.push({full_name: proj.full_name, url: proj.url})
		}
		return results
	}

}

module.exports = Github