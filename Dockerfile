# Dockerfile

# Build step
FROM node:18-alpine AS builder
WORKDIR /app

# Only copy what's needed
COPY package.json ./
RUN npm install

# Copy your existing Next.js source
COPY . .

# Build your app
RUN npx prisma generate
RUN npm i next

EXPOSE 3000

CMD npm run dev
