import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    // For all files
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    ignores: ["dist/*", "node_modules/*", "build/*"],
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // TypeScript Overrides
      "no-unused-vars": "off",
      "no-undef": "off", // TypeScript handles this
      "no-shadow": "off",
      
      // TypeScript Specific
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/consistent-type-assertions": ["error", {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/explicit-function-return-type": ["error", {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }],
      "@typescript-eslint/member-delimiter-style": "error",
      "@typescript-eslint/method-signature-style": ["error", "property"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      }],
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  }
];