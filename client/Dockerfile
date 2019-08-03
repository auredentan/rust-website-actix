FROM node:11-slim as build

COPY package.json package.json
RUN yarn install

COPY . .
RUN yarn build

FROM node:11-slim

WORKDIR /app
RUN yarn add serve
COPY --from=build build build

CMD serve -s build