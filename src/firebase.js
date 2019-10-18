import firebase, { firestore } from "firebase/app";
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
const usersCollection = db.collection("users");
const brandsCollection = db.collection("brands");

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

auth.onAuthStateChanged(user => {
  if (user) {
    sessionStorage.setItem("loginEmail", "login");
  } else {
    sessionStorage.setItem("loginEmail", "");
  }
});

//function for signing users in
async function signIn(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential;
  } catch (error) {
    return error;
  }
}

async function signOut() {
  try {
    await auth.signOut();
    return "success";
  } catch (error) {
    return error;
  }
}

//function to register new user using email and password
async function createNewUser(email, password) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const docSnapshot = await usersCollection.doc("currentUserNumber").get();
    const currentUserNumber = docSnapshot.data().number + 1;
    await docSnapshot.ref.update({ number: currentUserNumber });
    await usersCollection
      .doc(userCredential.user.uid)
      .set({ userNumber: currentUserNumber, type: "regular" });
    return currentUserNumber;
  } catch (error) {
    return error;
  }
}

async function updateUserEmail(email) {
  try {
    await auth.currentUser.updateEmail(email);
    return "success";
  } catch (err) {
    return err;
  }
}

async function updateUserPassword(password) {
  try {
    await auth.currentUser.updatePassword(password);
    return "success";
  } catch (err) {
    return err;
  }
}

//function to updateUser {phoneNumber, displayName, photoURL}
async function updateUser(user) {
  try {
    await usersCollection.doc(auth.currentUser.uid).update(user);
    return "success";
  } catch (error) {
    return error;
  }
}

async function getUserInfo() {
  const userSnapshot = await usersCollection.doc(auth.currentUser.uid).get();
  const user = userSnapshot.data();
  delete user.products;
  return { ...user, email: auth.currentUser.email };
}

//function to add order, include userId, list of productIds, address, time, status
async function createOrder(order) {
  try {
    order["time"] = firestore.Timestamp.fromMillis(Date.now());
    order["uid"] = auth.currentUser.uid;
    order["status"] = "processing";
    const result = await ordersCollection.add(order);
    console.log(result);
  } catch (error) {
    return error;
  }
}

//function to get orders by userId
async function getOrdersByUser() {
  try {
    const docSnapShot = await ordersCollection
      .where("uid", "==", auth.currentUser.uid)
      .orderBy("time", "desc")
      .get();
    const orders = docSnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return orders;
  } catch (error) {
    return error;
  }
}

//function to cancel order
async function cancelOrder(id) {
  try {
    const docRef = ordersCollection.doc(id);
    await docRef.update({ status: "cancelled" });
  } catch (error) {
    return error;
  }
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

//function to CreateTicketForSupport include title and content.
async function createTicketForSupport(request) {
  try {
    const uid = auth.currentUser.uid;
    const time = firestore.Timestamp.fromMillis(Date.now());
    const result = await supportRequestsCollection.add({
      uid: uid,
      time: time,
      ...request
    });
    return result;
  } catch (error) {
    return error;
  }
}

//function to add products to cart or modify cart includelist of productIds and quantity: [{id:id, quantity: 2}, ...]
async function updateCart(products) {
  try {
    await usersCollection.doc(auth.currentUser.uid).update({ products });
  } catch (error) {
    return error;
  }
}

//get products in cart and quantity (specifically called "quantity"!)
async function getCart() {
  const getCartFunc = functions.httpsCallable("getCart");
  const cart = await getCartFunc();
  return cart.data;
}

const searchProducts = (function() {
  let lastDoc = null;
  const reset = () => (lastDoc = null);
  const next = async (keyword = "", category = "", limit = 10) => {
    let query = productsCollection.orderBy("name");
    if (keyword !== "") {
      query = query.where("keywords", "array-contains", keyword);
    }
    if (category !== "") {
      query = query.where("category", "==", category);
    }
    if (lastDoc) {
      query = query.startAfter(lastDoc);
    }

    const querySnapshot = await query.limit(limit).get();

    if (querySnapshot.docs.length > 0) {
      lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    } else {
      return [];
    }
    const products = querySnapshot.docs.map(doc => {
      let product = doc.data();
      delete product.keywords;
      return { id: doc.id, ...product };
    });
    return products;
  };
  return { next, reset };
})();

//------------------------------------------Admin stuff---------------------------------------//

async function adminLogin(email, password) {
  try {
    await signIn(email, password);
    const userInfoDocSnapshot = await usersCollection
      .doc(auth.currentUser.uid)
      .get();
    if (userInfoDocSnapshot.data().type !== "admin") {
      await signOut();
      return "this account does not have admin rights";
    } else {
      return "admin login successful";
    }
  } catch (err) {
    return err;
  }
}

//function to add brand and image
async function addBrands(brand, imageFile) {
  try {
    const docRefPromise = brandsCollection.add(brand);
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
    return error;
  }
}

//edit brand and image
async function editBrand(id, brand, imageFile) {
  try {
    const docRef = brandsCollection.doc(id);

    if (imageFile) {
      const uploadTask = await uploadImage(imageFile);
      const imgUrl = await uploadTask.ref.getDownloadURL();
      brand = { ...brand, imgUrl };
    }
    await docRef.update(brand);
  } catch (error) {
    return error;
  }
}

//function to add product and image
async function createProduct(product, imageFile) {
  try {
    product["keywords"] = generateKeywords(product.name);
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
    return error;
  }
}

//edit product and image
async function editProduct(id, product, imageFile) {
  try {
    const docRef = productsCollection.doc(id);
    const keywords = generateKeywords(product.name);
    product["keywords"] = keywords;

    if (imageFile) {
      const uploadTask = await uploadImage(imageFile);
      const imgUrl = await uploadTask.ref.getDownloadURL();
      product = { ...product, imgUrl };
    }

    await docRef.update(product);
  } catch (error) {
    return error;
  }
}

//delete products function [products...];
async function deleteProducts(ids = []) {
  try {
    const docDeletePromises = ids.map(id => {
      return productsCollection.doc(id).delete();
    });
    await Promise.all(docDeletePromises);
    return "success";
  } catch (err) {
    return err;
  }
}

async function setWelcomeText(text) {
  try {
    const docSnapShot = await productsCollection.doc("homePage").get();
    await docSnapShot.ref.update({ welcomeText: text });
    return "welcome text updated";
  } catch (err) {
    return err;
  }
}

async function getWelcomeText() {
  try {
    const docSnapshot = await productsCollection.doc("homePage").get();
    const { welcomeText } = docSnapshot.data();
    return welcomeText;
  } catch (err) {
    return err;
  }
}

async function setfooterProduct(id) {
  try {
    const docSnapshot = await productsCollection.doc("homePage").get();
    await docSnapshot.ref.update({ footerProduct: id });
    return "success";
  } catch (err) {
    return err;
  }
}

async function getFooterProduct() {
  try {
    const docSnapshot = await productsCollection.doc("homePage").get();
    const { footerProduct } = docSnapshot.data();
    const productSnapshot = await productsCollection.doc(footerProduct).get();
    const product = productSnapshot.data();
    delete product.keywords;
    return { id: productSnapshot.id, ...product };
  } catch (err) {
    return err;
  }
}

async function setPromotedProducts(ids = []) {
  try {
    const docSnapshot = await productsCollection.doc("homePage").get();
    await docSnapshot.ref.update({ promotedProducts: ids });
    return "success";
  } catch (err) {
    return err;
  }
}

async function getPromotedProducts() {
  try {
    const docSnapshot = await productsCollection.doc("homePage").get();
    const { promotedProducts } = docSnapshot.data();
    const docSnapshotsPromises = promotedProducts.map(id =>
      productsCollection.doc(id).get()
    );
    const docSnapshots = await Promise.all(docSnapshotsPromises);
    const products = docSnapshots.map(doc => {
      let product = doc.data();
      delete product.keywords;
      return { id: doc.id, ...product };
    });
    return products;
  } catch (err) {
    return err;
  }
}

const getSupportTickets = (() => {
  let lastDoc = null;
  const reset = () => (lastDoc = null);
  async function next() {
    let query = supportRequestsCollection.orderBy("time");

    if (lastDoc) {
      query = query.startAfter(lastDoc).limit(10);
    } else {
      query = query.limit(10);
    }
    const querySnapshot = await query.get();

    if (querySnapshot.docs.length > 0) {
      lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      console.log(lastDoc.data());
    } else {
      return [];
    }
    const result = querySnapshot.docs.map(doc => doc.data());
    return result;
  }
  return { next, reset };
})();

async function setOrderStatus(id, status) {
  await ordersCollection.doc(id).update({ status: status });
}

const getOrders = (() => {
  let lastDoc = null;
  const reset = () => (lastDoc = null);
  async function next(limit = 10) {
    let query = lastDoc
      ? ordersCollection.startAfter(lastDoc).limit(limit)
      : ordersCollection.limit(limit);
    const querySnapshot = await query.get();
    if (querySnapshot.docs.length > 0) {
      lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    } else {
      return [];
    }
    const orders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return orders;
  }
  return { next, reset };
})();

export {
  signIn,
  createNewUser,
  createProduct,
  editProduct,
  deleteProducts,
  updateUser,
  createOrder,
  getOrdersByUser,
  cancelOrder,
  createTicketForSupport,
  getCart,
  updateCart,
  addBrands,
  editBrand,
  signOut,
  getUserInfo,
  updateUserEmail,
  updateUserPassword,
  adminLogin,
  getWelcomeText,
  setWelcomeText,
  getPromotedProducts,
  setPromotedProducts,
  getFooterProduct,
  setfooterProduct,
  getSupportTickets,
  searchProducts,
  setOrderStatus,
  getOrders
};
