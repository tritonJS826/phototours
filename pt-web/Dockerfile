# # ---------- build ----------
# FROM node:22.7.0-alpine AS build
# WORKDIR /app

# # pnpm
# RUN corepack enable && corepack prepare pnpm@9.8.0 --activate

# # workspace deps (корневые)
# COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
# # пакет фронта
# COPY pt-web/package.json pt-web/package.json

# # ставим зависимости только pt-web (workspace aware)
# RUN pnpm install --filter pt-web --frozen-lockfile

# # исходники pt-web
# COPY pt-web ./pt-web

# # сборка фронта (Vite создаст pt-web/build)
# RUN pnpm --filter pt-web build

# # ---------- runtime ----------
# FROM nginx:1.27-alpine AS runner

# # кладем собранную статику в стандартную папку nginx
# COPY --from=build /app/pt-web/build/ /usr/share/nginx/html/

# # конфиг: только статика + SPA
# COPY pt-web/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


#1 Stage 1: build
FROM node:22.5.1-alpine AS build
WORKDIR /app
RUN apk add --no-cache bash
COPY pt-web/package.json .
COPY pt-web/pnpm-lock.yaml .
RUN npm i -g pnpm@8.15.2
RUN pnpm install --frozen-lockfile
COPY pt-web .
RUN pnpm run build

# Stage 2: production
FROM node:22.5.1-alpine AS production
WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./

EXPOSE 5174
CMD ["npx", "serve", "-s", "build", "-l", "5174"]
