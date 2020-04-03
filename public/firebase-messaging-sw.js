importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCRFYgWB7tNmUzI8Oli16z-aUk33ibLujc',
  authDomain: 'soccerit.firebaseapp.com',
  databaseURL: 'https://soccerit.firebaseio.com',
  projectId: 'soccerit',
  storageBucket: 'soccerit.appspot.com',
  messagingSenderId: '917420206901',
  appId: '1:917420206901:web:1cb934e6c28594e4c53a7c',
  measurementId: 'G-DCQ7R6ZYDC'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  return self.registration.showNotification();
});
