const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const productsCollection = db.collection("products");

exports.getProductsList = functions.https.onRequest(
  async (request, response) => {
    const querySnapshot = await productsCollection.get();
    const products = querySnapshot.docs.map(doc => {
      let id = doc.id;
      let productData = doc.data();
      delete productData.keywords;
      return { id, ...productData };
    });
    response.header("Access-Control-Allow-Origin", "*");
    response.json(products);
  }
);

exports.getProduct = functions.https.onRequest(async (request, response) => {
  const productID = request.query.id;
  const querySnapshot = await productsCollection.doc(productID).get();
  const product = querySnapshot.data();
  delete product.keywords;
  response.header("Access-Control-Allow-Origin", "*");
  response.json(product);
});

exports.searchSuggestions = functions.https.onRequest(
  async (request, response) => {
    const keyword = request.query.keyword;
    let query = productsCollection.where("keywords", "array-contains", keyword);
    const snapshot = await query.limit(10).get();
    const suggestions = snapshot.empty
      ? ["Nothing found..."]
      : snapshot.docs.map(doc => doc.data().name);
    response.header("Access-Control-Allow-Origin", "*");
    response.json(suggestions);
  }
);
