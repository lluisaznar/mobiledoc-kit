FROM node:dubnium-alpine
LABEL author="Lluís Aznar <lluisaznar@fastmail.com>"

WORKDIR /var/www/html

# install packages
RUN apk add --update --no-cache git; \
    yarn global add grunt-cli bower

COPY docker-entrypoint /usr/local/bin/

ENTRYPOINT ["docker-entrypoint"]

CMD [ "npm", "start" ]