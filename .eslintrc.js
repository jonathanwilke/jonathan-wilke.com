module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	plugins: ['react-hooks'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'prettier/prettier': ['error'],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'react/prop-types': 0,
		'@typescript-eslint/camelcase': 0
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
