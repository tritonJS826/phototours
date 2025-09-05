# PT-General Server

This is a **Node.js + Express backend** for the PhotoTours application, using Prisma ORM and PostgreSQL.

---

## 🚀 Getting Started

1) Install dependencies:
```bash
pnpm install
```

2) Create `.env` file in this folder (see template below).

3) Prepare DB (generate + push schema + seed data):
```bash
pnpm setup:dev
```
This runs:
- `prisma generate` — generates Prisma Client
- `prisma db push` — pushes schema to DB (no migration files)
- `vite-node src/seeds/seed.ts` — seeds initial data (articles)

> Prefer `migrate dev` on shared environments to record migration history:
```bash
pnpm prisma:migrate
```

4) Start dev server:
```bash
pnpm start
```
API runs at ➜ http://localhost:8000

---

## 🔧 .env example

```dotenv
# Server
PORT=8000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Database (PostgreSQL)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME?schema=public"

# JWT
JWT_SECRET=replace_me_with_long_random_string

# Cloudinary
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

# Zoho CRM (optional)
ZOHO_CLIENT_ID=xxxx
ZOHO_CLIENT_SECRET=xxxx
ZOHO_REFRESH_TOKEN=xxxx
```

---

## 📜 Scripts

- `pnpm start` — dev server with hot reload (vite-node)
- `pnpm build` — compile TypeScript to `dist/`
- `pnpm type-check` — run TypeScript checks without emit
- `pnpm prisma:migrate` — create/apply migrations
- `pnpm prisma:generate` — regenerate Prisma Client
- `pnpm db:push` — push schema to DB without migrations
- `pnpm prisma:studio` — open Prisma Studio
- `pnpm prisma:format` / `pnpm prisma:validate`
- `pnpm db:reset` — reset DB (migrate reset) + run `src/scripts/reset.ts`
- `pnpm seed:articles` — run `src/seeds/seed.ts`
- `pnpm setup:dev` — **one command setup**
