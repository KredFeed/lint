const path = require('path');

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		sourceType: "module"
	},
	settings: {
    'import/resolver': {
			"typescript": {
        "alwaysTryTypes": true,
			}
    }
  },
	plugins: [
		"jest",
		"@typescript-eslint",
		"eslint-plugin-import",
	],
	extends: [
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
	],
	rules: {
		"@typescript-eslint/semi": ["error"], "semi": "off",
		"@typescript-eslint/indent": ["error", 2], "indent": "off",
		"@typescript-eslint/quotes": ["error", "single"], "quotes": "off",
		"@typescript-eslint/no-shadow": ["error"], "no-shadow": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-empty-interface": ["error",{"allowSingleExtends": true}],
		"import/newline-after-import": ["error", { "count": 2 }],
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
		"no-trailing-spaces": "error",
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "warn",
		"jest/no-identical-title": "error",
		"func-style": ["error", "expression"],
		"comma-dangle": ["error", "always-multiline"],
		"eqeqeq": ["error", "always"],
		"no-console": "warn",
		"object-shorthand": ["error", "always", { "avoidQuotes": true }],
		'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
		}],
		"import/no-duplicates": "error",
		"import/order": ["error", {
			"newlines-between": "never",
			"groups": [
				"builtin",
				"external",
				"internal",
				"index",
				["sibling","parent"]
			]
		}],
		"object-curly-spacing": ["error", "always", { "arraysInObjects": true }],
	}
};
