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
FROM caddy:latest AS final
COPY --from=frontend-build /app/frontend/dist/ /usr/local/apache2/htdocs/
COPY --from=backend-build /app/backend /usr/local/apache2/cgi-bin/

EXPOSE 8080