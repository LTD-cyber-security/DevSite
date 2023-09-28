#!/bin/bash
# Auto Push
git config --global user.email ""
git config --global user.name ""

git init
git remote add origin git@github.com:setdjod/blogger-api-netlify.git
git pull
git add .
git commit -m "Update"
git push
