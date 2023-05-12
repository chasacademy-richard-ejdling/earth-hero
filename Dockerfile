# Build stage for frontend
FROM node:18.16-alpine AS frontend-build
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend .
RUN npm run build

# Build stage for backend
FROM node:18.16-alpine AS backend-build
WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend .

FROM node:18.16-alpine AS final
WORKDIR /app
COPY --from=frontend-build /app/frontend/build/ ./frontend/
COPY --from=backend-build /app/backend/ ./backend/
WORKDIR /app/backend
EXPOSE 3000
CMD ["npm", "start", "&"]
