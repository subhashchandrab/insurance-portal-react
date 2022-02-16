FROM node:14-alpine as builder

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
