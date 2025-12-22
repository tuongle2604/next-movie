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

# ARG TMDB_ACCESS_TOKEN
# ENV TMDB_ACCESS_TOKEN=$TMDB_ACCESS_TOKEN

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