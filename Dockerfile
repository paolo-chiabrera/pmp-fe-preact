FROM quay.io/d3lirium/node-alpine-with-nginx:latest

MAINTAINER Paolo Chiabrera <paolo.chiabrera@gmail.com>

ADD package.json /tmp/package.json

ADD yarn.lock /tmp/yarn.lock

RUN cd /tmp && yarn install --production=false

RUN mkdir -p /home/app && cp -a /tmp/node_modules /home/app

ADD . /home/app

WORKDIR /home/app

RUN yarn run build

CMD [ "nginx" ]
