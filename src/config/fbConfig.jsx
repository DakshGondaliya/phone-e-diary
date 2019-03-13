import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDAzShVmHWJzMOJvi1UWoaQKTqzHBhXtBA",
  authDomain: "phone-e-diary.firebaseapp.com",
  databaseURL: "https://phone-e-diary.firebaseio.com",
  projectId: "phone-e-diary",
  storageBucket: "phone-e-diary.appspot.com",
  messagingSenderId: "38757835320"
};
firebase.initializeApp(config);

var fire = firebase.database();
export { fire };
