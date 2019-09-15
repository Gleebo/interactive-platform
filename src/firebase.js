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
function uploadImage(file) {
  //storage function for the image
  return firebase
    .storage()
    .ref()
    .child(file.name)
    .put(file);
}

//Promise for adding new product
function addProduct(product) {
  return firebase
    .firestore()
    .collection("products")
    .add(product);
}
//Promise for updating product
function updateProduct(id, product) {
  return firebase
    .firestore()
    .collection("products")
    .doc(id)
    .update(product);
}
//Promise for updating product
function updateImage(id, imgUrl) {
  return firebase
    .firestore()
    .collection("products")
    .doc(id)
    .update({ imgUrl: imgUrl });
}

//function to add product and image
async function createProduct(product, imageFile) {
  try {
    const docRefPromise = addProduct(product);
    const imgUploadPromise = uploadImage(imageFile);

    //put new porduct and upload image
    const [docRef, uploadTask] = await Promise.all([
      docRefPromise,
      imgUploadPromise
    ]);

    //get image url and put into product doc in firestore
    const imgUrl = await uploadTask.ref.getDownloadURL();
    await docRef.update({ imgUrl });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}
//function to add product and image
async function editProduct(id, product, imageFile) {
  try {
    if (imageFile == null) {
      await updateProduct(id, product);
    } else {
      const docRefPromise = updateProduct(id, product);
      const imgUploadPromise = uploadImage(imageFile);

      //update porduct and upload image
      const [docRef, uploadTask] = await Promise.all([
        docRefPromise,
        imgUploadPromise
      ]);

      //get image url and put into product doc in firestore
      const imgUrl = await uploadTask.ref.getDownloadURL();
      await updateImage(id, imgUrl);
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

//getProduct by ID
async function getProduct(id) {
  try {
    const docSnapShot = await firebase
      .firestore()
      .collection("products")
      .doc(id)
      .get();
    const product = docSnapShot.data();
    console.log(product);
    return product;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

//Edit product

export { signIn, createNewUser, createProduct, getProduct, editProduct };
