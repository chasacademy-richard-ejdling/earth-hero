# Build stage for backend [[I DON'T EVEN KNOW WHY]]
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
COPY --from=frontend-build /app/frontend/dist/ /app/public
WORKDIR /app/backend
COPY --from=backend-build /app/backend .

EXPOSE 8000
CMD ["node", "index.js"]