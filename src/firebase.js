import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

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
const functions = firebase.functions();

const productsCollection = db.collection("products");
const ordersCollection = db.collection("orders");
const supportRequestsCollection = db.collection("supportRequests");

auth.onAuthStateChanged(user => {
  if (user) {
    //user is signed in
  } else {
    //user is not signed in
  }
});

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

//function to updateUser
async function updateUser(user) {
  try {
    const updateUser = functions.httpsCallable("updateUser");
    const result = await updateUser(user);
    return result;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}
//function to add product and image
async function createProduct(product, imageFile) {
  try {
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

//function to add order, include userId, list of productIds, address, time, status
async function createOrder(order) {
  try {
    const result = await ordersCollection.add(order);
    console.log(result);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

//function to get orders by userId
async function getOrdersByUser(uid) {
  try {
    const docSnapShot = await ordersCollection.where("userId", "==", uid).get();
    const orders = docSnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return orders;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}
//function to cancel order
async function cancelOrder(id) {
  try {
    const docRef = ordersCollection.doc(id);
    await docRef.update({ status: "cancelled" });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}

async function addKeywords() {
  const querySnapshot = await productsCollection.get();
  querySnapshot.forEach(async doc => {
    let name = doc.data().name;
    let keywords = generateKeywords(name);
    await doc.ref.update({ keywords });
  });
}

function generateKeywords(name = "sample name") {
  name = name.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  let keywords = helper(name);
  let words = name.split(" ");
  if (words.length > 1) {
    words.forEach((word, i, words) => {
      name = name.slice(words[i].length + 1);
      keywords = [...keywords, ...helper(name)];
    });
  }
  return keywords;

  function helper(name) {
    let letters = name.split("");
    let keywords = [];
    let current = "";
    letters.forEach(letter => {
      current += letter;
      keywords.push(current);
    });
    return keywords;
  }
}

function uploadImage(file) {
  // function to upload image

  return storage
    .ref()
    .child(file.name)
    .put(file);
}
//function to CreateTicketForSupport
async function createTicketForSupport(request) {
  try {
    const uid = auth.currentUser.uid;
    const result = await supportRequestsCollection.add({
      uid: uid,
      ...request
    });
    console.log(result);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
}
export {
  signIn,
  createNewUser,
  createProduct,
  editProduct,
  updateUser,
  createOrder,
  getOrdersByUser,
  cancelOrder,
  createTicketForSupport
};
