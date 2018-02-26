module.exports = {
  root: true,
  globals: {
    requireRoot:true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'standard',
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 0,
    'space-before-function-paren': 0,
    // react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'settings': {
    'react': {
      'createClass': 'createReactClass', // Regex for Component Factory to use, default to 'createReactClass'
      'pragma': 'React'  // Pragma to use, default to 'React'
    }
  }
}