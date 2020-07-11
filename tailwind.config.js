const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  '80': '20rem',
  '96': '24rem',
  '112': '28rem',
  '128': '32rem',
  '160': '40rem',
  '192': '48rem',
  '224': '56rem',
  '256': '64rem',
  '320': '80rem',
  '384': '96rem',
  // Measure: Limit line length for readability
  'measure-narrow': '24em',
  measure: '30em',
  'measure-wide': '34em',
  // Resets
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
};

const width = {
  ...spacing,
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
  screen: '100vw',
};

const minWidth = {
  ...spacing,
  full: '100%',
  screen: '100vw',
};

const minHeight = {
  ...spacing,
  full: '100%',
  screen: '100vh',
};

const maxWidth = {
  ...spacing,
  none: 'none',
  full: '100%',
  screen: '100vw',
};

const maxHeight = {
  ...spacing,
  none: 'none',
  full: '100%',
  screen: '100vh',
};

const inset = (theme, { negative }) => ({
  '0': '0',
  auto: 'auto',
  ...theme('spacing'),
  ...negative(theme('spacing')),
});

const height = {
  ...spacing,
  auto: 'auto',
  full: '100%',
  screen: '100vh',
};

const fontFamily = {
  sans: [
    'PT Sans',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  mono: [
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ],
};

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing,
    height,
    width,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    inset,
    fontFamily,
  },
};
