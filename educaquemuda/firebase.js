var admin = require("firebase-admin");

var serviceAccount = require("./key/educaquemuda-express-firebase-firebase-adminsdk-6z2lf-844c748c4f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://educaquemuda-express-firebase.firebaseio.com"
});

module.exports = firebase;