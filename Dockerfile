FROM node:11-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY . .

RUN npm install -g ionic

RUN npm i @types/node

USER node

#RUN npm test

RUN npm install

COPY --chown=node:node . .

EXPOSE 8100

CMD ["ionic", "serve", "--all"]
