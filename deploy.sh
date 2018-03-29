echo building version $1
ng build --bh /primer-server/v$1/
echo $'RewriteEngine on\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule .* index.html [L]' > dist/.htaccess 
sudo rm -R /var/www/html/primer-server/v$1
sudo cp -R dist /var/www/html/primer-server/v$1
sudo ln -s /var/www/html/primer-server/v$1 /var/www/html/primer-server/latest