# syntax=docker/dockerfile:experimental

FROM node:lts-alpine
WORKDIR /client
COPY . .
RUN npm install --save
CMD ["npm", "start"]
EXPOSE 3000