FROM node
RUN npm install
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]