var firebase = require('firebase/app')
require('firebase/auth')

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpEsB2MtL6dD7ARQa7NXwVoOP_JizL0Fk",
    authDomain: "centrum-dev.firebaseapp.com",
    databaseURL: "https://centrum-dev.firebaseio.com",
    projectId: "centrum-dev",
    storageBucket: "centrum-dev.appspot.com",
    messagingSenderId: "913392213085",
    appId: "1:913392213085:web:1af477d11d6b195fdc01b4",
    measurementId: "G-ZVJVS41EZF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

var auth = firebase.auth();

export default auth