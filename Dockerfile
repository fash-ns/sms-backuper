FROM node:14-alpine

RUN ["apk", "add", "tzdata"]
RUN ["apk", "add", "git"]

ENV TZ=Asia/Tehran

WORKDIR /srv/sms-backup-service
COPY . .

RUN ["yarn"]
RUN ["yarn", "build"]

RUN ["/usr/bin/crontab", "/srv/sms-backup-service/crontab"]
CMD ["/usr/sbin/crond", "-f", "-l", "8"]
