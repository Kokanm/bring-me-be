FROM node:alpine AS base

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
