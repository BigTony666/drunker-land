#!/bin/bash
set -e

# run build
npm run build

# run unit test
npm run test -- --single-run --no-progress --browser=ChromeHeadlessCI

# run e2e test
npm run e2e -- --no-progress --config=protractor-ci.conf.js