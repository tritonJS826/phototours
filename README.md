# PhotoTours Monorepo

This repository contains both frontend and backend parts of the PhotoTours project.

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

3. Start databases and nginx in containers:
   ```bash
   docker-compose -f local.docker-compose.yml up
   ```

4. Run database migrations:
   ```bash
   pnpm run general:prisma:migrate
   ```

5. Start the application:
   ```bash
   pnpm start
   ```

- Frontend: http://localhost:5173  
- Backend API: http://localhost:8000  
- Grafana: http://localhost:5173/grafana/login  

---

## Development

Navigate to subprojects for details:

- [Frontend README](./pt-web/README.md)  
- [Backend README](./pt-general/README.md)
