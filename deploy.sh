#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ogdowski/ogdowski.github.io.git master

cd -