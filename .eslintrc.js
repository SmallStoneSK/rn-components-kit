module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "plugins": ["react", "jsx-a11y"],
  "rules": {
    "no-console": "off",
    "indent": ["warn", 2],
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "eol-last": "error",
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "comma-dangle": "off",
    "no-mixed-spaces-and-tabs": "error",
    "object-curly-spacing": "off",
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ]
  }
};