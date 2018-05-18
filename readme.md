## Avaliable scripts 

### yarn install

Install node modules

### yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.


## Config
After enabling Google, Facebook and Twitter sign-in medhods on firebase Authentication page,  you have to change only the file below... 

#### config.js
```js 
// src/config.js
export default {
  firebase: {
    apiKey: '{APIKEY}',
    authDomain: '{FIREBASE_PROJECT_ID}.firebaseapp.com',
    projectId: '{FIREBASE_PROJECT_ID}',
  },
  instagram: {
    clientId: '{CLIENT_ID}',
    redirectUri:
      process.env.NODE_ENV === 'production' // eslint-disable-line
        ? 'https://{FIREBASE_PROJECT_ID}.firebaseapp.com/complete-register/'
        : 'http://localhost:3000/complete-register/',
    responseType: 'token',
  },
}
```

##### index.html
```js
//public/index.html
<script type="text/javascript" src="https://platform.linkedin.com/in.js">
    api_key: {LINKEDIN_API}
    authorize: true
    scope: r_basicprofile r_emailaddress
  </script>
```
