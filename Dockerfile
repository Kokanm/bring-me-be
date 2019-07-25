FROM node:12.6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci
RUN npm install @nestjs/microservices

COPY . .

CMD [ "npm", "start" ]
