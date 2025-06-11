# syntax=docker.io/docker/dockerfile:1

FROM node:24-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN npm i --legacy-peer-deps

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us
COPY prisma ./prisma

RUN npm exec prisma generate
# Start Next.js in development mode based on the preferred package manager
COPY entrypoint.sh ./

RUN chmod +x ./entrypoint.sh

CMD ["./entrypoint.sh"]
