# Photo Tours – Frontend

This is the **frontend** part of the PhotoTours project, built with **React + TypeScript + Vite**.

---

## 📂 Project structure

```
src/             → main source code
public/          → static assets
vite.config.ts   → Vite configuration
tsconfig.json    → TypeScript configuration
eslint.config.js → ESLint configuration
```

---

## 🛠 Requirements

- **Node.js 22.5.1**
- **pnpm 9.8.0**

Check versions:

```bash
node -v
pnpm -v
```

---

## 🚀 Setup & Development

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create `.env` files with `./useEnvs.sh local`

3. Start dev server:
   ```bash
   pnpm dev
   ```
   App will be available at:  
   ➜ http://localhost:5174

---

## 📜 Scripts

- `pnpm dev` — start development server
- `pnpm start` — alias for `pnpm dev`
- `pnpm build` — build for production
- `pnpm serve` — preview build locally
- `pnpm lint-fix` — run ESLint with auto-fix
- `pnpm format` — format files with Prettier
- `pnpm stylelint-fix` — fix SCSS with Stylelint
- `pnpm storybook` — run Storybook on port 6006
