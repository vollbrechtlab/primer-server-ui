// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// This is a debug settings
export const environment = {
  production: false,

  // put the correct API version
  API_URL: 'http://localhost:8001/v1.0.3/'
};
