FROM node:20-alpine AS builder
WORKDIR /app

ARG BUILD_ENV=production
ENV NODE_ENV=$BUILD_ENV

COPY . .
RUN npm install

RUN npm run build -- --mode $BUILD_ENV

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
