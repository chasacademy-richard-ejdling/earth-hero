FROM node:20-alpine AS build-stage
WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend .
RUN npm run build

FROM nginx:1.21
COPY --from=build-stage /app/build/ /usr/share/nginx/html/