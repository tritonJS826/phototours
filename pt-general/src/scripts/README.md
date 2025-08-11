📦 Database Seeder

1. reset.ts

This script seeds the PostgreSQL database with initial demo data using Prisma.

What it does:

Creates default categories and tags

Adds two users with the GUIDE role

Adds two guides linked to those users

Creates two tours (each linked to a guide)

Connects each tour to one category and one tag

Adds available/unavailable tour dates

2. Run the script with the appropriate loader:

   - cd pt-general

   - pnpm run db:reset

3. This script has already been added to package.json in the pt-general folder.:

   - 'db:reset': 'vite-node src/scripts/reset.ts'
