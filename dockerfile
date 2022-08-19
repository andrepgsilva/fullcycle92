FROM node:18-alpine3.15

COPY . .

RUN npm install

RUN npm run build