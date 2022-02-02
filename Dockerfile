FROM node:15.14.0-alpine3.10

WORKDIR /app

COPY package*.json /app/

RUN npm install -g npm@7.10.0

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "serve"]
