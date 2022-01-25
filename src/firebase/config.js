import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDSUjAE10S5MHBnIbjJgoHcCuhFxGBOhgc",
//     authDomain: "olxproject-3f571.firebaseapp.com",
//     projectId: "olxproject-3f571",
//     storageBucket: "olxproject-3f571.appspot.com",
//     messagingSenderId: "320389516394",
//     appId: "1:320389516394:web:505a8cf6fbecce6151ce13",
//     measurementId: "G-B0R7R8K2L8"
//   };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAylx8fD9-5Y7MEEcOXDj3d2CcfHrEM14I",
    authDomain: "fir-d4cff.firebaseapp.com",
    projectId: "fir-d4cff",
    storageBucket: "fir-d4cff.appspot.com",
    messagingSenderId: "890578026646",
    appId: "1:890578026646:web:8e70aa45fdeb55d30602b7",
    measurementId: "G-9LQ7ZDBWM0"
  };
  export default firebase.initializeApp(firebaseConfig)