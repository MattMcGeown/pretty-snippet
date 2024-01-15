module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    // using airbnb's code standards, https://airbnb.io/javascript/react/
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  settings: {
    react: { version: '17.0.2' },
  },
  plugins: ['import', 'react', 'react-hooks'],
  rules: {
    // ---- warning rules ------------------------------
    // TODO: [airbnb] review to see if corrections should be made and upgraded to error
    'no-param-reassign': 'warn',
    // ---- END warning rules --------------------------

    // ---- disabled rules -----------------------------
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',

    // TEMPORARILY DISABLED TODO: review items for inclusion
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': 'off',
    // import issue with @ aliasing
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    // ---- END disabled rules -------------------------

    // ---- react specific rules -----------------------
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-bind': 'off',
    // TODO: review rule for re-instatement
    'react/no-array-index-key': 'off',
    // ---- END react specific rules -------------------

    // ---- @typescript-eslint specific rules ----------
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // ---- END @typescript-eslint rules ----------------
  },
};
