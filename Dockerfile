# syntax=docker/dockerfile:1

##### 1. Dependencias #####
FROM node:22-alpine AS deps
WORKDIR /app
# Alpine necesita libc6-compat para algunos binarios de Node.
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

##### 2. Build #####
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

##### 3. Runtime (imagen mínima) #####
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario sin privilegios.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Output standalone de Next.js: incluye solo lo necesario para producción.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
