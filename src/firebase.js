import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-storage";
//configuration object
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

const auth = firebase.auth();
const db = firebase.firestore();
//const storage = firebase.storage();

//function for signing users in
async function signIn(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}
//function to register new user using email and password
async function createNewUser(email, password) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}
//retrieve all products from db
async function getAllProducts() {
  try {
    const querySnapshot = await db.collection("products").get();
    let docs = [];
    querySnapshot.forEach(doc => docs.push({ id: doc.id, ...doc.data() }));
    return docs;
  } catch (error) {
    console.error;
  }
}

export { signIn, createNewUser, getAllProducts };
