FROM node:22.7.0-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.8.0 --activate

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY pt-general/package.json pt-general/package.json

RUN pnpm install --filter pt-general --frozen-lockfile

COPY pt-general ./pt-general

ENV NODE_ENV=production
ENV PORT=8000
ENV HOST=0.0.0.0  

EXPOSE 8000

RUN pnpm --filter pt-general prisma:generate

RUN pnpm --filter pt-general build

CMD ["pnpm", "--filter", "pt-general", "start"]
