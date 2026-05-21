// eslint.config.js
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        // Глобальные функции Jest
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
        vi: 'readonly'
      }
    },
    rules: {
      // Ваши правила (можно добавить при необходимости)
      'no-unused-vars': 'warn'
    }
  },
  // Игнорировать папку с тестами, если нужно
  {
    ignores: ['node_modules/**']
  }
];