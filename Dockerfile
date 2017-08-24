FROM node:alpine

WORKDIR /usr/src/app
COPY package.json .
COPY . .
RUN npm install

EXPOSE 3888
CMD [ "npm", "start" ]