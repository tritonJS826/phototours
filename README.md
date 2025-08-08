# Photo Tours – Frontend

This is the **frontend** part of the Photo Tours project, built with **React + TypeScript + Vite**.  
It is located in the `pt-web/` directory, so backend can be added later as a separate service.

---

## 📂 Project structure

At the root of the repo:

```
/ (root)
  pt-web/      → React + TS + Vite frontend
  pt-general/  → backend folder
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

- **Node.js 22.5.1**
- **pnpm 9.8.0** (we use pnpm as the package manager)

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


1. Install dependencies:

```bash
pnpm install
```

2. Create .env file inside all modules with variables from .env.local.example (run "useEnvs.sh" script for such purpose)

`./useEnvs.sh local`

3. Run databases and nginx in containers (check local.nginx.conf for right addresses):

`docker-compose -f local.docker-compose.yml up`

grafana will be available by [link](http://localhost:5173/grafana/login) locally

5. Run database migration to have appropriate tables in the db

`pnpm run general:prisma:migrate`

4. Run dev server:

```bash
pnpm start
```

pt-webapp will be available by[link](http://localhost:5173) locally
