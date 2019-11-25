FROM node:12-alpine

EXPOSE 4567

RUN npm install -g graphql-intercom --no-cache

CMD 'npx' 'graphql-intercom'
