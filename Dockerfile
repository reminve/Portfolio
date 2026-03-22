FROM nginx:alpine

COPY dist/angular-portfolio/browser /usr/share/nginx/html

EXPOSE 80