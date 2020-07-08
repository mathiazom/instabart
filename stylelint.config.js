module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    // Add exceptions to support Tailwind
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
