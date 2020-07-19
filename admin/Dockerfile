FROM node:12.18

RUN yarn global add @angular/cli@9.1.7;

# cache some packages
COPY . /opt/www
RUN yarn && rm -rf /opt/www;

WORKDIR /opt/www

EXPOSE 4200

