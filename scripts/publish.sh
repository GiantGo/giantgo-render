#!/bin/sh

set -e

pnpm i

pnpm build

cd packages/giantgo-render
pnpm publish --no-git-checks --access public
cd -

echo "Publish completed"
