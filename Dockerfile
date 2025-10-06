FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN npm install -g pnpm \
    && pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
