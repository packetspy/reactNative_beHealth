module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'unused-imports', 'import'],
    rules: {
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': [
            2, {
                'ignore': ['^@/', '^~~/', '^/']
            }
        ],
        'import/no-duplicates': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
    }
}
