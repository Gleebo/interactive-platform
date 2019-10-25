const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const productsCollection = db.collection("products");
const auth = admin.auth();
const supportCollection = db.collection("supportRequests");
const brandsCollection = db.collection("brands");
const usersCollection = db.collection("users");
const propertiesCollection = db.collection("properties");

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

//get cart with product info
exports.getCart = functions.https.onCall(async (data, context) => {
  const uid = context.auth.uid;
  const cartRef = await usersCollection.doc(uid).get();
  const cart = cartRef.data().products.map(async item => {
    const product = await productsCollection.doc(item.id).get();
    return { product, quantity: item.quantity };
  });
  const products = await Promise.all(cart);
  const productsInCart = products.map(doc => {
    const product = doc.product.data();
    delete product.keywords;
    return { id: doc.product.id, ...product, qunatity: doc.quantity };
  });
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

exports.createAdmin = functions.https.onCall(async function(data, context) {
  const userCredentials = data.userCredentials;
  const userDocSnapshot = await usersCollection.doc(context.auth.uid).get();
  if (userDocSnapshot.data().type === "admin") {
    const userRecord = await auth.createUser(userCredentials);
    await usersCollection.doc(userRecord.uid).set({ type: "admin" });
    return "successfully created new admin user";
  } else {
    return "this account has no admin rights";
  }
});

exports.deleteAllProductsByCategory = functions.https.onCall(async function(
  data,
  context
) {
  const category = data.category;
  const querySnapshot = await productsCollection
    .where("category", "==", category)
    .get();
  const deletePromises = querySnapshot.docs.map(doc => doc.ref.delete());
  await Promise.all(deletePromises);
  const docSnapshot = await propertiesCollection.doc("properties").get();
  const { categories } = docSnapshot.data();
  const newCategories = categories.filter(cat => cat !== category);
  await propertiesCollection
    .doc("properties")
    .update({ categories: newCategories });
  return "deleted";
});

exports.deleteAllProductsBySubject = functions.https.onCall(async function(
  data,
  context
) {
  const subject = data.subject;
  const querySnapshot = await productsCollection
    .where("subject", "==", subject)
    .get();
  const deletePromises = querySnapshot.docs.map(doc => doc.ref.delete());
  await Promise.all(deletePromises);
  const docSnapshot = await propertiesCollection.doc("properties").get();
  const { subjects } = docSnapshot.data();
  const newSubjects = subjects.filter(sub => sub !== subject);
  await propertiesCollection
    .doc("properties")
    .update({ subjects: newSubjects });
  return "deleted";
});

exports.onDeleteProductListener = functions.firestore
  .document("products/{productId}")
  .onDelete(async (snapshot, context) => {
    const { category = "", subject = "" } = snapshot.data();
    if (category !== "") {
      const querySnapshot = await productsCollection
        .where("category", "==", category)
        .limit(10)
        .get();
      if (querySnapshot.docs.length === 0) {
        const docSnapshot = await propertiesCollection.doc("properties").get();
        const { categories } = docSnapshot.data();
        const newCategories = categories.filter(cat => cat !== category);
        await propertiesCollection
          .doc("properties")
          .update({ categories: newCategories });
        return;
      }
    }
    if (subject !== "") {
      const querySnapshot = await productsCollection
        .where("subject", "==", subject)
        .limit(10)
        .get();
      if (querySnapshot.docs.length === 0) {
        const docSnapshot = await propertiesCollection.doc("properties").get();
        const { subjects } = docSnapshot.data();
        const newSubjects = subjects.filter(sub => sub !== subject);
        await propertiesCollection
          .doc("properties")
          .update({ subjects: newSubjects });
        return;
      }
    }
  });
