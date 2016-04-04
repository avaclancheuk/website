#!/bin/bash

cd _output
git init
git config user.name "Travis CI"
git config user.email "travis@travis-ci.com"
git add .
git commit -m "Deploy to GitHub Pages via Travis"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
