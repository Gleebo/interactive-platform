import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//configuration object
var firebaseConfig = {
  apiKey: "AIzaSyA7vQPCa3-TE8Ve-QiAH9l80aYir7oJkZU",
  authDomain: "kids-islands.firebaseapp.com",
  databaseURL: "https://kids-islands.firebaseio.com",
  projectId: "kids-islands",
  storageBucket: "gs://kids-islands.appspot.com",
  messagingSenderId: "653194778308",
  appId: "1:653194778308:web:d168438b672124cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//function for signing users in
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
//function to register new user using email and password
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
// function to upload image
async function uploadImage(file, brand, category, description, name, price) {
  try {
    //storage function for the image
    const url = await firebase
      .storage()
      .ref()
      .child(file.name)
      .put(file)
      .snapshot.ref.getDownloadURL();
    const docRef = await createProduct(
      brand,
      category,
      description,
      url,
      name,
      price
    );
    return docRef.id;
    // const url = await uploadTask.ref.getDownloadURL();
    // return url;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

//function to add product
async function createProduct(
  brand,
  category,
  description,
  imgUrl,
  name,
  price
) {
  try {
    //todo: check the value of name and price

    //add product to firebase
    const addProduct = await firebase
      .firestore()
      .collection("products")
      .add({
        brand: brand,
        category: category,
        description: description,
        imgUrl: imgUrl,
        name: name,
        price: price
      });
    return addProduct;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

export { signIn, createNewUser, createProduct, uploadImage };
