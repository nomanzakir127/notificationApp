import firebase from 'firebase'
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
  const messaging = firebase.messaging();


export function configureNotification(){
   Notification.requestPermission().then((permission)=>{
       console.log(permission)
       if(permission === "granted")
       {
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
              console.log("Token :", currentToken)
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
            
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        
          });
       }
   })
}