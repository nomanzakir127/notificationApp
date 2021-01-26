importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_mxDjGR6b3oyWfyq92-qSaUolM5bhIEo",
    authDomain: "notificationapp-ba42d.firebaseapp.com",
    projectId: "notificationapp-ba42d",
    storageBucket: "notificationapp-ba42d.appspot.com",
    messagingSenderId: "923445117461",
    appId: "1:923445117461:web:6a8160aca8bcd1747c041c",
    measurementId: "G-ETG5ZTMJDR"
  };


  firebase.initializeApp(firebaseConfig)
  firebase.messaging();