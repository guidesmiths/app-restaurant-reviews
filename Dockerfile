FROM node:10.16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# In order to run node alpine avoiding Python error
RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000

RUN npm run manifest

WORKDIR /usr/src/app/react-app

RUN npm install && npm run build 

WORKDIR /usr/src/app

CMD [ "npm", "start" ]

