const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const productsCollection = db.collection("products");
const auth = admin.auth();
const supportCollection = db.collection("supportRequests");
const brandsCollection = db.collection("brands");
const usersCollection = db.collection("users");

exports.getProducts = functions.https.onRequest(async (request, response) => {
  const id = request.query.id;
  var querySnapshot;
  if (id === "none") {
    querySnapshot = await productsCollection.limit(20).get();
  } else {
    querySnapshot = await productsCollection
      .startAfter(await productsCollection.doc(id).get())
      .limit(10)
      .get();
  }
  const products = querySnapshot.docs.map(doc => {
    let id = doc.id;
    let productData = doc.data();
    delete productData.keywords;
    return { id, ...productData };
  });
  response.header("Access-Control-Allow-Origin", "*");
  response.json(products);
});

exports.searchProducts = functions.https.onRequest(
  async (request, response) => {
    const id = request.query.id;
    const category = request.query.category;
    const keyword = request.query.keyword;
    var query = productsCollection.where("keywords", "array-contains", keyword);
    if (category !== "all") {
      query = query.where("category", "==", category);
    }
    if (id !== "none") {
      query = query.startAfter(await productsCollection.doc(id).get());
    }
    query = query.limit(10);
    const querySnapshot = await query.get();
    const result = querySnapshot.docs.map(doc => {
      let id = doc.id;
      let productData = doc.data();
      delete productData.keywords;
      return { id, ...productData };
    });
    response.header("Access-Control-Allow-Origin", "*");
    response.json(result);
  }
);

exports.getProductById = functions.https.onRequest(
  async (request, response) => {
    const productID = request.query.id;
    const querySnapshot = await productsCollection.doc(productID).get();
    const product = querySnapshot.data();
    delete product.keywords;
    response.header("Access-Control-Allow-Origin", "*");
    response.json(product);
  }
);

exports.searchAhead = functions.https.onRequest(async (request, response) => {
  const keyword = request.query.keyword;
  let query = productsCollection.where("keywords", "array-contains", keyword);
  const snapshot = await query.limit(10).get();
  const suggestions = snapshot.empty
    ? ["Nothing found..."]
    : snapshot.docs.map(doc => doc.data().name);
  response.header("Access-Control-Allow-Origin", "*");
  response.json(suggestions);
});

//data can include email and password
exports.updateUser = functions.https.onCall(async (data, context) => {
  try {
    const user = data.user;
    const uid = context.auth.uid;
    const writeResult = await usersCollection.doc(uid).update(user);
    return writeResult;
  } catch (error) {
    return error;
  }
});

//get cart with product info
exports.getCart = functions.https.onCall(async (data, context) => {
  const uid = context.auth.uid;
  const cartRef = await usersCollection.doc(uid).get();
  var productsInCart = [];
  const cart = cartRef.data().products;
  if (cart.length > 0) {
    const cartProducts = cart.map(async item => {
      const product = await productsCollection.doc(item.id).get();
      return { product, quantity: item.quantity };
    });
    const products = await Promise.all(cartProducts);
    productsInCart = products.map(doc => {
      const product = doc.product.data();
      delete product.keywords;
      return { id: doc.product.id, ...product, quantity: doc.quantity };
    });
  }
  return productsInCart;
});

//for admin protal, the function of get supportRequests list
exports.getSupports = functions.https.onRequest(async (request, response) => {
  var querySnapshot;
  querySnapshot = await supportCollection.orderBy("time", "desc").get();
  const supports = querySnapshot.docs.map(doc => {
    let id = doc.id;
    let supportData = doc.data();
    return { id, ...supportData };
  });
  response.header("Access-Control-Allow-Origin", "*");
  response.json(supports);
});
// the function of get brands list
exports.getBrands = functions.https.onRequest(async (request, response) => {
  var querySnapshot;
  querySnapshot = await brandsCollection.get();
  const brands = querySnapshot.docs.map(doc => {
    let id = doc.id;
    let brandData = doc.data();
    return { id, ...brandData };
  });
  response.header("Access-Control-Allow-Origin", "*");
  response.json(brands);
});

exports.getBrandById = functions.https.onRequest(async (request, response) => {
  const brandID = request.query.id;
  const querySnapshot = await brandsCollection.doc(brandID).get();
  const brand = querySnapshot.data();
  response.header("Access-Control-Allow-Origin", "*");
  response.json(brand);
});
