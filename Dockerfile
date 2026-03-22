FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN rm -f package-lock.json && npm i

COPY . .
RUN npm run build -- --base-href ./ 

# Étape Serveur Web (Production)
FROM nginx:alpine

COPY --from=build /app/dist/angular-portfolio/browser /usr/share/nginx/html

EXPOSE 80