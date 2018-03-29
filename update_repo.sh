# make sure to push dev first
git checkout dev
git add --all .
git commit -m "small change"
git push origin dev

# copy all dev except .git and venv to /tmp/primer-server-ui-tmp/
rm -fR /tmp/primer-server-ui-tmp
mkdir /tmp/primer-server-ui-tmp
rsync -aP . /tmp/primer-server-ui-tmp/ --exclude=.git --exclude=node_modules --exclude=update_repo.sh

# copy back all files in /tmp/primer-server-ui-tmp/ to master
git checkout master
mv .git /tmp/primer-server-ui-tmp/
mv node_modules /tmp/primer-server-ui-tmp/
rm -fR ./* ./.*
cp -a /tmp/primer-server-ui-tmp/. ./
git add --all .
git commit -m "from dev"
git push origin master

# come back to dev
git checkout dev
