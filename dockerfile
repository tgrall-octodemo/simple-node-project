FROM node:15

ENV x=aio_KWcO67R8aZoM00pXwinkzJePbsxV

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
