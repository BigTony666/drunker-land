#!/bin/bash
set -e

# run installation
npm ci

# run build
npm run build

# run unit test
npm run test

# run e2e test
npm run e2e