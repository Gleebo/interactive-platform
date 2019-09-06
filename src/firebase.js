import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA7vQPCa3-TE8Ve-QiAH9l80aYir7oJkZU",
  authDomain: "kids-islands.firebaseapp.com",
  databaseURL: "https://kids-islands.firebaseio.com",
  projectId: "kids-islands",
  storageBucket: "",
  messagingSenderId: "653194778308",
  appId: "1:653194778308:web:d168438b672124cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

async function signIn(email, password) {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(userCredential);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

async function createNewUser(email, password) {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(userCredential);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

export { signIn, createNewUser };
