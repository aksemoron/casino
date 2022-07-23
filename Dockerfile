FROM node:lts-alpine3.15
WORKDIR /usr/src/app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
EXPOSE 3000
CMD [ "npm", "start" ]