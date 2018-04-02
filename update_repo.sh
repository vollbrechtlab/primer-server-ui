# make sure to push dev first
git checkout dev
git add --all .
git commit -m "small change"
git push origin dev

# cleanup current tmp
rm -fR /tmp/primer-server-ui-tmp
mkdir /tmp/primer-server-ui-tmp

# copy all nessesary files to /tmp/primer-server-ui-tmp/
cp {.angular-cli.json,.editorconfig,.gitignore,README.md,deploy.js,karma.conf.js,package-lock.json,package.json,protractor.conf.js,tsconfig.json,tslint.json} /tmp/primer-server-ui-tmp/
cp -R src /tmp/primer-server-ui-tmp/
cp -R e2e /tmp/primer-server-ui-tmp/
cp -R other_data /tmp/primer-server-ui-tmp/

# go to master branch
git checkout master
git pull

# remove nessasary files
rm {.angular-cli.json,.editorconfig,.gitignore,README.md,deploy.js,karma.conf.js,package-lock.json,package.json,protractor.conf.js,tsconfig.json,tslint.json} /tmp/primer-server-ui-tmp/
rm -R src /tmp/primer-server-ui-tmp/
rm -R e2e /tmp/primer-server-ui-tmp/
rm -R other_data /tmp/primer-server-ui-tmp/

# copy back all files in /tmp/primer-server-ui-tmp/ to master and push
cp -a /tmp/primer-server-ui-tmp/. ./
git add --all .
git commit -m "$1"
git push origin master

# come back to dev
git checkout dev
