# ---------- build ----------
FROM node:22.7.0-alpine AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.8.0 --activate

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY pt-web/package.json pt-web/package.json
COPY pt-general/package.json pt-general/package.json

RUN pnpm install --filter pt-web --frozen-lockfile

COPY . .
RUN pnpm --filter pt-web build  # создаст pt-web/build

# ---------- runtime ----------
FROM nginx:alpine AS runner

COPY pt-web/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/pt-web/build/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
