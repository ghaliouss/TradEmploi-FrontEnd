/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;


function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}


// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');
writeFileUsingFS('./src/environments/environment.dev.ts', '');


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
  // This file was autogenerated by dynamically running setEnv.ts and using dotenv for managing API key secrecy

export const environment = {
  name: '${process.env.ENV_NAME}',

  production: ${process.env.ENV_PRODCUTION},

  firebaseConfig: {
    apiKey: '${process.env.FIREBASE_API_KEY}',

    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',

    databaseURL: '${process.env.FIREBASE_DATABASE_URL}',

    projectId: '${process.env.FIREBASE_PROJECT_ID}',

    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',

    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',

    appId: '${process.env.FIREBASE_APP_ID}',

    measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}',
  },

  gcp: {
    apiKey: '${process.env.GCP_APP_ID}',
    identityUrlToken: '${process.env.GCP_IDENTITY_URL_TOKEN}',
    gateWayUrl: '${process.env.GCP_GATEWAY_URL}',
  },
  sentry: {
    url: '${process.env.SENTRY_URL}',
  },
};
`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file
writeFileUsingFS('./src/environments/environment.dev.ts', environmentFileContent);


/* tslint:enable */
