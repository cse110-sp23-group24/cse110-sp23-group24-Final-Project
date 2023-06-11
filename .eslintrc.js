module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['google', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': 'warn',
        'linebreak-style': 'off',
        'comma-dangle': 'off'
    },
};
