#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

rm -rf dist

# 安装
pnpm i

# 构建
pnpm run docs:build
cd example
npm i
cd -
pnpm run example:build

mv docs/.vitepress/dist/ dist
mv example/dist dist/example

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:GiantGo/giantgo-render.git master:gh-pages

cd -
cd -