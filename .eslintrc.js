module.exports = {
    "env": {
        "es2021": true,
        "node": true
	},
	"plugins": [
		"security"
	],
    "extends": [
		"eslint:recommended",
		"plugin:security/recommended"
	],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
    }
};
