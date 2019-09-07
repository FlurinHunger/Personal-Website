const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.test = functions.https.onRequest((request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  response.status(200).json({
    message: 'This is working!' + ip
  });
});
