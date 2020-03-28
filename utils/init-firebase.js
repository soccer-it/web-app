let app = null;

export default function initFirebase() {
  if (app) return app;

  const firebase = require('firebase/app');
  require('firebase/messaging');

  const appConfig = {
    apiKey: 'AIzaSyCRFYgWB7tNmUzI8Oli16z-aUk33ibLujc',
    authDomain: 'soccerit.firebaseapp.com',
    databaseURL: 'https://soccerit.firebaseio.com',
    projectId: 'soccerit',
    storageBucket: 'soccerit.appspot.com',
    messagingSenderId: '917420206901',
    appId: '1:917420206901:web:1cb934e6c28594e4c53a7c',
    measurementId: 'G-DCQ7R6ZYDC'
  };

  const firebaseApp = firebase.initializeApp(appConfig);
  const messaging = firebase.messaging();

  app = {
    firebaseApp,
    messaging
  };

  return app;
}
