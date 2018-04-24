ng build --prod --env=prod --bh /primer-server/
echo -e 'RewriteEngine on\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule .* index.html [L]' > dist/.htaccess
