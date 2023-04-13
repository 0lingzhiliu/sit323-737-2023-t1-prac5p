FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY week2.js  .

EXPOSE 8080
CMD ["node","week2.js"]