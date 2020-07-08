module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: 'babel-eslint',
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
  plugins: ['react'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier', // Deactivates all rules that overlap with Prettier
    'prettier/react', // Same as above, just for React
  ],
  rules: {
    // React is never imported when using Next.js
    'react/react-in-jsx-scope': 'off',

    // Allow writing JSX in .js files
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx'] }],

    // YOLO!
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
