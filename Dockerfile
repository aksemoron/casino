FROM docker.io/library/node:lts-alpine3.15
WORKDIR /usr/src/app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
EXPOSE 3000
RUN cd frontend
CMD [ "npm", "start" ]