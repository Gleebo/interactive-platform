const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const productsCollection = db.collection("products");
const auth = admin.auth();
const supportCollection = db.collection("supportRequests");

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
    const userRecord = await auth.updateUser(uid, user);
    return { userRecord };
  } catch (error) {
    return error;
  }
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
