  import firebase from 'firebase'; 

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDafeZMe8vhB3iHQ0G_3upRF4nA2EObj-k",
    authDomain: "todo-app-cp-453dd.firebaseapp.com",
    databaseURL: "https://todo-app-cp-453dd.firebaseio.com",
    projectId: "todo-app-cp-453dd",
    storageBucket: "todo-app-cp-453dd.appspot.com",
    messagingSenderId: "252183188142",
    appId: "1:252183188142:web:cebf88c5e8ad83272ad33f",
    measurementId: "G-KLGFV9NZ5X"

  });

  const db = firebaseApp.firestore();

  export default db;