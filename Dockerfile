FROM node:alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install --quiet

EXPOSE 3888
CMD [ "npm", "start" ]