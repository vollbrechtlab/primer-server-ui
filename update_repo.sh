# make sure to push dev first
git checkout dev
git add --all .
git commit -m "small change"
git push origin dev

# copy all dev except .git and venv to /tmp/primer-server-ui-tmp/
rm -fR /tmp/primer-server-ui-tmp
mkdir /tmp/primer-server-ui-tmp
cp {.angular-cli.json, .editorconfig, .gitignore, README.md, deploy.js, karma.conf.js, package-lock.json, package.json, protractor.conf.js, tsconfig.json, tslint.json} /tmp/primer-server-ui-tmp/


