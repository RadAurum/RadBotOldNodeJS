require('dotenv').config({ path: '.env' });
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');


const botsettings = process.env;
const firebaseConfig = {
    apiKey: botsettings.FIREBASE_API_KEY,
    authDomain: `${botsettings.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    // The value of `databaseURL` depends on the location of the database
    databaseURL: `https://${botsettings.FIREBASE_DATABASE_NAME}.firebaseio.com`,
    projectId: botsettings.FIREBASE_PROJECT_ID,
    storageBucket: `${botsettings.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: botsettings.FIREBASE_SENDER_ID,
    appId: botsettings.FIREBASE_APP_ID,
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: `G-${botsettings.FIREBASE_MEASUREMENT_ID}`,
}

const app = initializeApp(firebaseConfig);


module.exports = {
    database: getDatabase(app)
}

