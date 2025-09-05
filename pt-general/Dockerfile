FROM node:22.7.0-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.8.0 --activate

# Copy package.json first
COPY package.json ./

# Copy source code (including prisma schema)
COPY . .

# Install dependencies (now prisma schema is available)
RUN pnpm install

ENV NODE_ENV=development
ENV PORT=8000
ENV HOST=0.0.0.0  

EXPOSE 8000

# Build the application
RUN pnpm build

# Start the application
CMD ["pnpm", "start"]
