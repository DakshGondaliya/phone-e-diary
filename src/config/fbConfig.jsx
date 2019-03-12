import firebase from "firebase";
var config = {
  apiKey: "AIzaSyCbixkqPpE8zrHrJeJtpFiv3l8h8FhRqv8",
  authDomain: "phonedirectory-cf402.firebaseapp.com",
  databaseURL: "https://phonedirectory-cf402.firebaseio.com",
  projectId: "phonedirectory-cf402",
  storageBucket: "phonedirectory-cf402.appspot.com",
  messagingSenderId: "1004885701681"
};
firebase.initializeApp(config);

var fire = firebase.database();
export { fire };
