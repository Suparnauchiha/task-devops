import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignore dist/
  },
  {
    files: ['**/*.{js,jsx}'], // Check .js and .jsx

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // React Hooks recommended rules
      ...reactHooks.configs.recommended.rules,

      // Disable this rule for normal data fetching with useEffect
      'react-hooks/set-state-in-effect': 'off',

      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^[A-Z_]',
        },
      ],

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];