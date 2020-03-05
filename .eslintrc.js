module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	extends: [
		"eslint:recommended"
		// "plugin:react/recommended"
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		indent: ["warn", 2, { SwitchCase: 1 }],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": 0
	}
};