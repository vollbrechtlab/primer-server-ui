#value=`cat src/environments/general.ts`
#echo "$value"
value=`grep title: src/environments/general.ts`
echo "$value"
sed 's/title: //' | value
#grep version: src/environments/general.ts | sed 's/version: //' | sed 's/\,//g' | sed 's/\ //g' | sed 's/'/ /g'

#curPath="$pwd"
#echo building version $1
#ng build --prod --env=prod --bh /primer-server/v$1/
#echo $'RewriteEngine on\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule .* index.html [L]' > dist/.htaccess 
#sudo rm -fR /var/www/html/primer-server/v$1
#sudo cp -R dist /var/www/html/primer-server/v$1
#cd /var/www/html/primer-server/
#sudo rm latest
#sudo ln -s v$1 latest
#cd "$curPath"
