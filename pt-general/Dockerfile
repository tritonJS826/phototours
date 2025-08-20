FROM node:22.7.0-alpine
WORKDIR /app
<<<<<<< HEAD

RUN corepack enable && corepack prepare pnpm@9.8.0 --activate

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY pt-general/package.json pt-general/package.json

RUN pnpm install --filter pt-general --frozen-lockfile

COPY pt-general ./pt-general

ENV NODE_ENV=production
ENV PORT=8000

EXPOSE 8000

RUN pnpm --filter pt-general prisma:generate

RUN pnpm --filter pt-general build

CMD ["pnpm", "--filter", "pt-general", "start"]
>>>>>>> 0c5dbea (fix: #0 restore frozen-lockfile in Dockerfiles; update nginx compose)
=======
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json .
EXPOSE 3000
CMD ["npm", "start"]
>>>>>>> cb36cf2 (feat: #34 dashboard and profile)
