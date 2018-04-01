/**
 * Script to deploy Primer Server UI easily
*/

const { readFileSync, writeFileSync, existsSync, mkdirSync } = require("fs");
const { execSync } = require('child_process');

const repoPath = '../primer-server/ui'
const primerServerDicName = 'primer-server'

// if the folder doesn't exist, make it
if(!existsSync(repoPath+'/'+primerServerDicName+'/')){
	mkdirSync(repoPath+'/'+primerServerDicName+'/')
}

let contents = readFileSync("package.json");
let packageData = JSON.parse(contents);
// get version
let version = packageData['version'];

try {
	console.log('building version ' + version);
	let bh = '/'+primerServerDicName+'/v'+version
	execSync('ng build --prod --env=prod --bh '+bh+'/');

	let deployPath = repoPath + '/v' + version;
	console.log('deploying to ' + deployPath);

	writeFileSync('dist/.htaccess', 'RewriteEngine on\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule .* index.html [L]');
	execSync('rm -fR '+deployPath);
	execSync('cp -R dist '+deployPath);
} catch (err) {
	console.log(err);
	return;
}
