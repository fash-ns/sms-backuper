FROM node:14-alpine
WORKDIR /prod

COPY . .
RUN ["yarn"]
RUN ["yarn", "build"]

CMD ["yarn", "start"]