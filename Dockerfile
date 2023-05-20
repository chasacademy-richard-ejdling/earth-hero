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
FROM nginx:1.21-alpine AS final
RUN rm -rf /etc/nginx/conf.d/*
COPY --from=frontend-build /app/frontend/dist/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
