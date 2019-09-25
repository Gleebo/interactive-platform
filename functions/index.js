const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const productsCollection = db.collection("products");

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
