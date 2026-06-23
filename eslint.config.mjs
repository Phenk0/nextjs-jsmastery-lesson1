import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import tailwindcss from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    // 'plugin:tailwindcss/recommended',
    'prettier'
  ),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'components/ui/**/*'
    ]
  },
  {
    plugins: {
      tailwindcss
    },
    settings: {
      tailwindcss: {
        cssConfigPath: 'app/globals.css'
      }
    },
    rules: {
      ...tailwindcss.configs.recommended.rules
    }
  },
  {
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object'
          ],
          'newlines-between': 'always',

          pathGroups: [
            { pattern: '@app/**', group: 'external', position: 'after' }
          ],

          pathGroupsExcludedImportTypes: ['builtin'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'comma-dangle': 'off'
    }
  },
  { files: ['**/*.ts', '**/*.tsx'], rules: { 'no-undef': 'off' } }
];

export default eslintConfig;
