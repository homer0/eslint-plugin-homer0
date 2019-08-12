const DEFAULT_INDENTATION = 2;

module.exports = {
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    indent: ['error', DEFAULT_INDENTATION, {
      MemberExpression: 0,
    }],
    'lines-between-class-members': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      allowAfterSuper: true,
      enforceInMethodNames: false,
    }],
    'operator-linebreak': ['error', 'after'],
  },
};