FROM node:13.10.1-alpine3.11
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
RUN yarn install --silent
COPY . /app
CMD ["yarn", "start"]‚