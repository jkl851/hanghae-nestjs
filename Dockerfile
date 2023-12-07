FROM node:18
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN yarn install
ENV NODE_ENV prod
RUN yarn build
EXPOSE 3001
ENTRYPOINT yarn start:prod