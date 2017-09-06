FROM node:alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install --quiet

CMD [ "npm", "start" ]