FROM node:8.16.0-slim

RUN apt-get update && apt-get install -y git && rm -rf /var/cache/apt

WORKDIR /app

COPY package-lock.json .
RUN npm install

COPY package.json ./
RUN npm install --only=dev
RUN npm i -g gulp

COPY src src
COPY data data
COPY *.js .babelrc modernizr-config.json package.json .stylelintrc ./

ENTRYPOINT ["npm"]
RUN gulp build
