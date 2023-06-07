FROM node:18-alpine
WORKDIR /var/www/react
COPY ./package*.json ./
RUN yarn install
CMD ["yarn", "start"]