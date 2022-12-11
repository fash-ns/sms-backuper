#!/bin/sh

rm -rf ./dist
npm i
./node_modules/.bin/tsc
npm prune --production