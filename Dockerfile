FROM node:18.18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]