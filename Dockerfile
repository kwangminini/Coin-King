# Stage 1: Install dependencies and build the app
FROM node:16-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production=false --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2: Install production dependencies
FROM node:16-alpine AS production-dependencies
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production=true --frozen-lockfile

# Stage 3: Prepare the final image
FROM node:16-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY package.json ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["yarn", "start"]