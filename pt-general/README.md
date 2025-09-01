# PT-General Server

This is a **Node.js + Express backend** for the PhotoTours application, using Prisma ORM and PostgreSQL.

---

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Create `.env` file in this folder:
   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

3. Run database migrations:
   ```bash
   pnpm prisma:migrate
   ```

4. Generate Prisma client:
   ```bash
   pnpm prisma:generate
   ```

5. Start dev server:
   ```bash
   pnpm dev
   ```
   API runs at ➜ http://localhost:8000

---

## 📜 Scripts

- `pnpm dev` — start in dev mode with hot reload  
- `pnpm build` — compile TypeScript  
- `pnpm start` — run in production  
- `pnpm prisma:migrate` — apply database migrations  
- `pnpm prisma:generate` — regenerate Prisma client  

---

## 🗄 reset:db script
Go to `src/scripts` folder for `reset.ts` script and instructions to seed database.

---

## 🔗 Integrations

### Zoho CRM
- OAuth 2.0 setup  
- Automatic lead creation on user registration  
- Refresh token flow supported  

Add to `.env`:
```
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REFRESH_TOKEN=your_refresh_token
```

### Cloudinary
- Media upload via `multer-storage-cloudinary`  
- Optimized delivery of photos/videos  
- URL saved in DB  
- Configurable via `.env`
