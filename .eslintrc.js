module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Make sure eslint can handle JSX
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  globals: {
    React: 'writable',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', // A sensible rule set
    'prettier', // Needed to deactivate rules that overlap with Prettier
    'prettier/react', // Same as above, just for React
  ],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Importing React isn't required when using Next.js
  },
};
