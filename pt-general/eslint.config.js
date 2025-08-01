import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      jsdoc,
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic,
    },
    rules: {
      // Code style
      '@stylistic/eol-last': ['error', 'always'],
      'semi': ['error', 'always'],
      'indent': ['error', 2, {SwitchCase: 1}],
      'comma-spacing': ['error', {before: false, after: true}],
      'semi-spacing': ['error', {before: false, after: true}],
      'no-multi-spaces': 'error',
      'object-curly-spacing': ['error', 'never'],
      'object-curly-newline': ['error', {multiline: true}],
      'array-bracket-newline': ['error', {multiline: true}],
      'space-in-parens': ['error', 'never'],
      'key-spacing': ['error', {beforeColon: false}],
      'space-infix-ops': ['error', {int32Hint: false}],
      'space-unary-ops': ['error', {words: true, nonwords: false, overrides: {new: false}}],
      'no-trailing-spaces': 'error',
      'arrow-spacing': 'error',
      'quotes': ['error', 'single'],
      'lines-between-class-members': ['error', 'always'],
      'padded-blocks': ['error', {classes: 'always'}],
      'no-multiple-empty-lines': ['error', {max: 1}],
      'max-len': ['error', {code: 130}],
      'max-params': ['error', 7],
      'curly': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'brace-style': 'error',
      'no-mixed-operators': 'error',
      'eqeqeq': 'error',
      'keyword-spacing': ['error', {overrides: {return: {after: true}}}],
      'lines-around-comment': ['error', {afterBlockComment: false, beforeBlockComment: true}],
      'capitalized-comments': ['error', 'always', {ignoreInlineComments: true, ignoreConsecutiveComments: true}],

      // Imports
      'simple-import-sort/imports': ['error', {
        groups: [
          ['^\\u0000', '^(@|src)(/.*|$)', '^', '^.+\\.?(css)$'],
        ],
      }],
      'no-duplicate-imports': 'error',
      'no-restricted-imports': ['error', {patterns: ['.*']}],

      // Exports
      'no-restricted-exports': ['error', {restrictDefaultExports: {direct: true}}],

      // JS / TS
      'no-console': 'error',
      'no-tabs': ['error', {allowIndentationTabs: true}],
      'no-magic-numbers': ['error', {ignore: [0]}],
      'multiline-ternary': ['error', 'always-multiline'],
      'no-var': 'error',
      'prefer-const': 'error',

      // TS-specific
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/member-ordering': ['error', {
        default: [
          'public-field',
          'protected-field',
          'private-field',
          'constructor',
          'public-method',
          'protected-method',
          'private-method',
        ],
      }],
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      }],
      'space-before-blocks': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/member-delimiter-style': 'error',

      // Padding
      'padding-line-between-statements': [
        'error',
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: 'import', next: 'block-like'},
        {blankLine: 'always', prev: 'import', next: 'class'},
        {blankLine: 'always', prev: 'import', next: 'const'},
      ],
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      'src/generated/'
    ],
  },
];
