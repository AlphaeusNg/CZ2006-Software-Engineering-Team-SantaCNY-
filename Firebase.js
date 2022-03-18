// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeJN3GEnO1Rmy6KAcRuQuKtSJITyoSdrM",
  authDomain: "loginui-7261b.firebaseapp.com",
  projectId: "loginui-7261b",
  storageBucket: "loginui-7261b.appspot.com",
  messagingSenderId: "945249990048",
  appId: "1:945249990048:web:78d09df16b38f8a8f260c5"
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