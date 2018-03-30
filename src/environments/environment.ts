// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// This is a debug settings
export const environment = {
  production: false,

    // for basic settings
  PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS: [
    {value: 0, viewValue: 'Schildkraut and Lifson 1965'},
    {value: 1, viewValue: 'SantaLucia 1998'},
    {value: 2, viewValue: 'Owczarzy et. 2004'}
  ],
  PRIMER_TM_FORMULA_INPUT_OPTIONS: [
    {value: 0, viewValue: 'Breslauer et al. 1986'},
    {value: 1, viewValue: 'SantaLucia 1998'}
  ],
  // for specificity checking
  GENOME_OPTIONS: [
    {value: 'maize_v3', viewValue: 'Maize B73 AGPv3'},
    {value: 'maize_v4', viewValue: 'Maize V4'}
  ],

  // put the correct API version
  API_URL: 'http://localhost:8001/v1.03/'
};
