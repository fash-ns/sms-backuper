FROM node:14-alpine

WORKDIR /srv/sms-backup-service
COPY . .
RUN ["apk", "add", "git"]
RUN ["yarn"]
RUN ["yarn", "build"]

RUN ["/usr/bin/crontab", "/srv/sms-backup-service/crontab"]
CMD ["/usr/sbin/crond", "-f", "-l", "8"]
