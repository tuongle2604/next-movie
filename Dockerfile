# ---------- deps ----------
FROM node:22-alpine AS deps
WORKDIR /app

# Copy only dependency manifests first (better caching)
COPY package.json package-lock.json ./
RUN npm ci

# ---------- build ----------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# This will do the trick, use the corresponding env file for each environment.
COPY .env .env

# -------- BUILD-TIME ENVS (used by NEXT_PUBLIC_*) --------
# ARG NEXT_PUBLIC_API_BASE_URL
# ARG NEXT_PUBLIC_IMAGE_BASE_URL

# Server-only build-time envs (if needed during build)
ARG TMDB_ACCESS_TOKEN

# ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
# ENV NEXT_PUBLIC_IMAGE_BASE_URL=$NEXT_PUBLIC_IMAGE_BASE_URL
ENV TMDB_ACCESS_TOKEN=$TMDB_ACCESS_TOKEN

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app

# ARG ACCESS_TOKEN
# ENV ACCESS_TOKEN=$ACCESS_TOKEN

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Next.js standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]