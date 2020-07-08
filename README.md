# What is Instabart?

Instabart is a collection of nifty links that makes life as a NTNU student a tad easier. You can see it in action at [instabart.no](http://instabart.no).

As an NTNU student there are lots of useful websites at your disposal. Unfortunately, finding them is nearly impossible. Even if you know what you're looking for, good luck finding it via the [university website](http://xkcd.com/773/). Instabart solves this problem by collecting all the things you need in one place.

# Getting started

1. Clone project
2. Run `yarn`
3. Run `yarn dev` to spin up a local web server

### Activating "format on save"

This repo uses [Prettier](https://prettier.io/) to automatically improve the formatting of files when you save a file. The setup is a bit different for every editor, so see [Prettier's Editor Integration](https://prettier.io/docs/en/editors.html) to get instructions on how to activate it for your favorite editor.

**Visual Studio Code**:

Create `.vscode/settings.json` and paste the following:

```json
{
  // Activate auto-formatting for all supported files
  "editor.formatOnSave": true,

  // Make sure Prettier is set as default formatter
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Fix ESLint, Stylelint and TSLint errors on save
  "editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true,
    // For TSLint
    "source.fixAll.tslint": true,
    // For Stylelint
    "source.fixAll.stylelint": true
  },

  // Don't use built in CSS validation.
  // Stylelint will handle the validation.
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}
```

## Tailwind VS Code plugin

TODO: Write about the awesome plugin [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
