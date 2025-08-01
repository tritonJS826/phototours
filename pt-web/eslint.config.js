// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import vitest from "eslint-plugin-vitest";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: true,
      },
    },
    plugins: {
      react,
      "@typescript-eslint": tsPlugin,
      jsdoc,
      vitest,
      "simple-import-sort": simpleImportSort,
      "@stylistic": stylistic,
    },
    rules: {
      // Code style
      "@stylistic/eol-last": ["error", "always"],
      semi: ["error", "always"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "comma-spacing": ["error", { before: false, after: true }],
      "semi-spacing": ["error", { before: false, after: true }],
      "no-multi-spaces": "error",
      "object-curly-spacing": ["error", "never"],
      "object-curly-newline": ["error", { multiline: true }],
      "array-bracket-newline": ["error", { multiline: true }],
      "space-in-parens": ["error", "never"],
      "key-spacing": ["error", { beforeColon: false }],
      "space-infix-ops": ["error", { int32Hint: false }],
      "space-unary-ops": [
        "error",
        { words: true, nonwords: false, overrides: { new: false } },
      ],
      "no-trailing-spaces": "error",
      "arrow-spacing": "error",
      quotes: ["error", "double"],
      "lines-between-class-members": ["error", "always"],
      "padded-blocks": ["error", { classes: "always" }],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "max-len": ["error", { code: 130 }],
      "max-params": ["error", 7],
      curly: "error",
      "comma-dangle": ["error", "always-multiline"],
      "brace-style": "error",
      "no-mixed-operators": "error",
      eqeqeq: "error",
      "keyword-spacing": ["error", { overrides: { return: { after: true } } }],
      "lines-around-comment": [
        "error",
        { afterBlockComment: false, beforeBlockComment: true },
      ],
      "capitalized-comments": [
        "error",
        "always",
        { ignoreInlineComments: true, ignoreConsecutiveComments: true },
      ],

      // Imports
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              "^react",
              "^\\u0000",
              "^(@|components)(/.*|$)",
              "^",
              "^.+\\.?(css)$",
            ],
          ],
        },
      ],
      "no-duplicate-imports": "error",
      "no-restricted-imports": ["error", { patterns: [".*"] }],

      // Exports
      "no-restricted-exports": [
        "error",
        { restrictDefaultExports: { direct: true } },
      ],

      // JS / TS
      "no-console": "error",
      "no-tabs": ["error", { allowIndentationTabs: true }],
      "no-magic-numbers": ["error", { ignore: [0] }],
      "multiline-ternary": ["error", "always-multiline"],
      "no-var": "error",
      "prefer-const": "error",

      // TS-specific
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "public-field",
            "protected-field",
            "private-field",
            "constructor",
            "public-method",
            "protected-method",
            "private-method",
          ],
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        },
      ],
      "space-before-blocks": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/member-delimiter-style": "error",

      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-tag-spacing": [
        "error",
        {
          beforeClosing: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          closingSlash: "never",
        },
      ],
      "react/jsx-curly-spacing": "error",
      "react/jsx-key": "error",
      "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
      "react/jsx-first-prop-new-line": ["error", "multiprop"],
      "react/no-unknown-property": "error",
      "react/self-closing-comp": "error",
      "react/jsx-wrap-multilines": ["error", { return: "parens-new-line" }],
      "react/jsx-one-expression-per-line": "error",

      // Padding
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "import", next: "block-like" },
        { blankLine: "always", prev: "import", next: "class" },
        { blankLine: "always", prev: "import", next: "const" },
      ],

      // Vitest
      "vitest/expect-expect": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  {
    files: [".storybook/**/*.ts", ".storybook/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.storybook.json",
      },
    },
  },

  {
    files: ["**/*.stories.tsx"],
    rules: {
      "no-restricted-exports": [
        "error",
        { restrictDefaultExports: { direct: false } },
      ],
      "storybook/default-exports": "off",
      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: true,
          require: {
            ArrowFunctionExpression: true,
          },
          checkConstructors: false,
          checkSetters: true,
        },
      ],
    },
  },
  {
    files: [".storybook/**/*.ts"],
    rules: {
      "no-restricted-imports": "off",
      "no-restricted-exports": "off",

    },
  },
  {
    ignores: [
      "build",
      "dist",
      "node_modules",
      "public",
      "src/apiAutogenerated",
      "**/node_modules",
      "storybook-static",
      "vitest.config.ts",
      "cypress.config.ts",
      "cypress/",
      "coverage/",
      "generateSiteMap.js",
      "public/serviceWorker.js",
    ],
  },
  ...storybook.configs["flat/recommended"],
];
