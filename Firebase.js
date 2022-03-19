// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkbvB7fczgewtQBlMN1YtEz6MX26pignU",
  authDomain: "cz2006-login.firebaseapp.com",
  projectId: "cz2006-login",
  storageBucket: "cz2006-login.appspot.com",
  messagingSenderId: "310509353216",
  appId: "1:310509353216:web:ca5ea1fa76c70e9769dbe5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ){
    app = firebase.initializeApp(firebaseConfig);

}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};