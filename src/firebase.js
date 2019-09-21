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

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

const productsCollection = db.collection("products");

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

//function to add product and image
async function createProduct(product, imageFile) {
  try {
    product = addKeywords(product);
    const docRefPromise = productsCollection.add(product);
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

//edit product and image
async function editProduct(id, product, imageFile) {
  try {
    const docRef = productsCollection.doc(id);

    if (imageFile) {
      const uploadTask = await uploadImage(imageFile);
      const imgUrl = await uploadTask.ref.getDownloadURL();
      product = { ...product, imgUrl };
    }

    await docRef.update(product);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

//getProduct by ID
async function getProduct(id) {
  //new way to get using cloud functions
  // const url = `https://us-central1-kids-islands.cloudfunctions.net/getProduct?id=${id}`;
  // const product = await fetch(url);

  try {
    const docSnapShot = await productsCollection.doc(id).get();
    const product = docSnapShot.data();
    return product;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

async function searchProducts(name = "", category = "") {
  try {
    let query = productsCollection.where("keywords", "array-contains", name);
    if (category) {
      query = query.where("category", "==", category);
    }

    const querySnapshot = await query.get();
    let docs = [];

    if (querySnapshot.size > 0) {
      querySnapshot.forEach(doc => docs.push({ id: doc.id, ...doc.data() }));
    }
    console.log(docs);
  } catch (error) {
    console.error(error);
  }
}

function addKeywords(product) {
  let nameKeywords = [];
  let current = "";
  product.name.split("").forEach(letter => {
    current += letter;
    nameKeywords.push(current);
  });

  let keywords = [product.name, product.brand, ...nameKeywords];
  product = { keywords, ...product };
}

function uploadImage(file) {
  // function to upload image

  return storage
    .ref()
    .child(file.name)
    .put(file);
}

export {
  signIn,
  createNewUser,
  createProduct,
  getProduct,
  editProduct,
  searchProducts
};
