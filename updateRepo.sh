git add --all .
git commit -m "small change"
git push origin dev

rm -R /tmp/primer-server-ui-tmp
mkdir /tmp/primer-server-ui-tmp
rsync -aP . /tmp/primer-server-ui-tmp/ --exclude=.git --exclude=node_modules --exclude=updateRepo.sh
git checkout master
cp -a /tmp/primer-server-ui-tmp/. ./
git add --all .
git commit -m "from dev"
git push origin master
git checkout dev