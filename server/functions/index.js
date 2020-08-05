const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    res.send({result: `Hello World!`});
  });


exports.createGame = functions.https.onRequest(async (req, res) => {
  // todo
  // Random a 4 number game id
  // Create game in database 
  let id = 9999
  const snapshot = await admin.database().ref('/games/'+id).set({players: 0});
  res.send({gameID: 9999})
})
  