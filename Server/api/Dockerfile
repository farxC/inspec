# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /api
COPY . .
RUN npm install --save
CMD ["npm", "run","dev"]
EXPOSE 3100