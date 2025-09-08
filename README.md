# PhotoTours Monorepo

This repository contains both **frontend** and **backend** parts of the PhotoTours project.

## 📂 Project structure

```
/ (root)
  pt-web/      → React + TypeScript + Vite frontend
  pt-general/  → Node.js + Express backend with Prisma
```

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables:
   ```bash
   ./useEnvs.sh local
   ```

3. Start required services:
   ```bash
   docker-compose -f local.docker-compose.yml up
   ```

4. Run DB migrations + seed data:
   ```bash
   pnpm db:setup
   ```

5. Start the application:
   ```bash
   pnpm start
   ```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Grafana: http://localhost:5173/grafana/login 

---

## 📖 Module Docs

- [Frontend (pt-web)](./pt-web/README.md)  
- [Backend (pt-general)](./pt-general/README.md)
