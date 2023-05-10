modexports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "avoid",
        "semi": false,
        "trailingComma": "none",
        "endOfLine": "lf",
        "tabWidth": 2,
        "useTabs": false,
        "printWidth": 120,
        "jsxSingleQuote": false
      }
    ]

  },
}
