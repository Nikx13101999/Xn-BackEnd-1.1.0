const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function sendNotification(token, title, body) {

  console.log(body);
  
  const message = {
    notification: {
      title,
      body,
    },
    token: token,
  };
  return admin.messaging().send(message);
}

module.exports = { sendNotification };