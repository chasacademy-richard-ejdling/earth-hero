# Build stage for backend
FROM node:18.16-alpine AS backend-build
WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend .

# Build stage for frontend
FROM node:18.16-alpine AS frontend-build
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend .
RUN npm run build

# Final build stage
FROM node:18.16-alpine AS final
WORKDIR /app
COPY --from=frontend-build /app/frontend/dist/* /var/www/earth-hero/
# COPY --from=backend-build /app/backend/ ./backend/
# WORKDIR /app/frontend
# EXPOSE 7000
# CMD ["npm", "run", "dev"]