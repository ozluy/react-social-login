# Social Login

  <ul>
    <li><a href="#google">Google</a></li>
    <li><a href="#facebook">Facebook</a></li>
    <li><a href="#twitter">Twitter</a></li>
    <li><a href="#linkedin">LinkedIn</a></li>
    <li><a href="#instagram">Instagram</a></li>
  </ul>

# Avaliable scripts

### yarn install

Install node modules

### yarn start

Runs the app in the development mode.
Open https://localhost:3000 to view it in the browser. Facebook SDK only works with **https** so be sure that url set to `https`

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### yarn build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment"> click me </a>.

### firebase deploy

Deploys project to firebase host

## Config

After enabling Google, Facebook and Twitter sign-in medhods on firebase Authentication page, you have to change only the file below...

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

#### index.html

```js
//public/index.html
// Instagram API
<script type="text/javascript" src="https://platform.linkedin.com/in.js">
    api_key: {LINKEDIN_API}
    authorize: true
    scope: r_basicprofile r_emailaddress
</script>

 //Facebook SDK
 <script>
  window.fbAsyncInit = function () {
    FB.init({
      appId: {FACEBOOK_APP_ID},
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.0',
    });
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>
```

# Detailed Info for auths

You can set auth for Google, Facebook and Twitter with Firebase Spark Pricing Plan which is **free**. For LinkedIn and Instagram auths you must upgrade to **paid** pricing plan to Blaze(pay as you go). You can check social login samples on <a href="https://github.com/ozluy/react-social-login"> github.com/ozluy/react-social-login </a>.

## Google

Firebase provides you to access basic and additional user info (by using scopes).

For more info check step by step Firebase docs for <a href="https://firebase.google.com/docs/auth/web/google-signin">Authenticate Using Google Sign-In with JavaScript</a>

## Facebook

#### With Facebook SDK

Facebook provides SDK for Web which you can access basic and additional user info (by using scopes).

For more info check step by step Facebook developers docs for <a href="https://developers.facebook.com/docs/facebook-login/web/">Facebook Login for the Web with the JavaScript SDK</a>

#### With Firebase

Firebase provides you to access basic and additional user info (by using scopes).

For more info check step by step Firebase docs for <a href="https://firebase.google.com/docs/auth/web/facebook-login">Authenticate Using Facebook Login with JavaScript</a>

## Twitter

Firebase provides you to access basic and additional user info (by using scopes).

For more info check step by step Firebase docs for <a href="https://firebase.google.com/docs/auth/web/twitter-login">Authenticate Using Twitter in JavaScript</a>

## LinkedIn

#### LinkedIn SDK

LinkedIn JavaScript SDK provides you to access basic and additional user info (by using scopes).

For more info check step by step LinkedIn developers docs for <a href="https://developer.linkedin.com/docs/getting-started-js-sdk">Getting Started with the JavaScript SDK</a>

## Instagram

#### Instagram Client-Side (Implicit) Authentication

Instagram Client-Side (Implicit) Authentication provides you basic profile information(e.g: first_name, last_name, bio...). All permissions require approval to be used out of Sandbox, you have wait for approval for that. You cant get email of user until you got approved.

For more info check step by step Instagram developers docs for <a href="https://www.instagram.com/developer/authentication/">Client-Side (Implicit) Authentication</a>
