FROM node:12
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030
CMD [ "node", "index.js" ]