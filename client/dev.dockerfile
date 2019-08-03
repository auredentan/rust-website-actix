FROM node:11-slim

WORKDIR /app

COPY package.json package.json
RUN yarn install

CMD yarn start