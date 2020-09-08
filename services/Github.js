const logger = require('../utils/logger');
const axios = require('axios');

const GITURL = 'https://api.github.com';

class Github {
	constructor(username) {
		this.username = username
	}

	async getProjects() {
		logger.info(`Getting projects for user: ${this.username}`)
		const response = await axios.get(`${GITURL}/users/${this.username}/repos`);
		console.log(Object.keys(response))
	}
}

module.exports = Github