# Photo Tours – Frontend

This is the **frontend** part of the Photo Tours project, built with **React + TypeScript + Vite**.  
It is located in the `pt-web/` directory, so backend can be added later as a separate service.

---

## 📂 Project structure

At the root of the repo:

```
/ (root)
  pt-web/      → React + TS + Vite frontend
  (future)     → backend folder
```

Inside `pt-web/`:

```
src/             → main source code
public/          → static assets
vite.config.ts   → Vite configuration
tsconfig.json    → TypeScript configuration
eslint.config.js → ESLint configuration
```

---

## 🛠 Requirements

- **Node.js >= 18.x**
- **pnpm >= 8.x** (we use pnpm as the package manager)

Install `pnpm` globally if you don’t have it yet:

```bash
npm install -g pnpm
```

Check versions:

```bash
node -v
pnpm -v
```

---

## 🚀 Setup & Development

Go to the frontend folder:

```bash
cd pt-web
```

Install dependencies:

```bash
pnpm install
```

Run dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Type-check the project:

```bash
pnpm type-check
```

Lint the code:

```bash
pnpm lint
```

---

## ✅ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) → dev server + build
- [SCSS Modules](https://sass-lang.com/) for styling
- [ESLint](https://eslint.org/) for code quality

---

## 📏 ESLint & TypeScript

The project uses a strict ESLint setup with TypeScript integration.  
For type-aware rules, we recommend enabling **type-checked configs**.

Example:

```js
// eslint.config.js
import tseslint from 'typescript-eslint';

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // or stricter:
      // ...tseslint.configs.strictTypeChecked,
      // optional stylistic rules:
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

You can also enhance React-specific linting with:

```bash
pnpm add -D eslint-plugin-react-x eslint-plugin-react-dom
```

Then extend:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
]);
```

---

## 📌 Notes

- **Frontend lives inside `pt-web/`, do not install deps in root.**
- Use **pnpm** only (not npm or yarn) to keep `pnpm-lock.yaml` consistent.
- Backend will be added later as a separate service.
