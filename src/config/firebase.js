import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDIy5YmuT7iSkp1AJIJWkgh16GKOChfRmU",
    authDomain: "eventos-807bb.firebaseapp.com",
    databaseURL: "https://eventos-807bb.firebaseio.com",
    projectId: "eventos-807bb",
    storageBucket: "eventos-807bb.appspot.com",
    messagingSenderId: "786403383797",
    appId: "1:786403383797:web:3a919845c0039b1e50a8bc"
  };

export default firebase.initializeApp(firebaseConfig);