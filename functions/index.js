const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();


exports.getFormProgress = functions.firestore.document('users/mubina').onUpdate((change, context) => {
  const data = change.after.data();
  const { ['progress']: remove, ...fields } = data;
  let emptyFields = 0;
  for(var key in fields) {
    if(fields[key].trim() !== "") {
      emptyFields += 1;
    }
  }
  let progress = ((emptyFields / 5) * 100).toFixed()
  return db.doc(`users/mubina`).update({
    progress: progress
  })
});
