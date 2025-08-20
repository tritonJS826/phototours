📦 Database Seeder

1. reset.ts

This script seeds the PostgreSQL database with initial demo data using Prisma and @faker-js/faker for generating random content.

What it does: 

- Creates 5 categories and 5 tags
- Adds 20 users, including 5 guides
- Creates 20 tours, each linked to a random guide, category, and tag
- Generates 40 tour dates (some available, some unavailable)
- Tour titles and descriptions are randomized for more realistic demo data


2. Run the script with the appropriate loader:

   - cd pt-general

   - pnpm run db:reset

3. This script has already been added to package.json in the pt-general folder.:

   - 'db:reset': 'vite-node src/scripts/reset.ts'
