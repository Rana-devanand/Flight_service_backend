FROM node:latest

WORKDIR /flight-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm install -g nodemon
CMD ["nodemon", "index.js"]