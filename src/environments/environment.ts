// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // domain: 'https://erp.foretech.pw/',
  // domain: 'http://127.0.0.1:8000/',
  // domain: 'http://192.168.0.105:8000/',

  domain: 'http://192.168.1.4:8000/',
  encryption_secret: '7e61413c0f1b48f9b3e671fed1cb455d0186891b',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
