const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.getIP = functions.https.onRequest((request, response) => {
  response.status(200).json({
    userIP: request.headers['x-forwarded-for'] || request.connection.remoteAddress
  });
});
