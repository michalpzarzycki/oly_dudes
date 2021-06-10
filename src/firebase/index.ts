import firebase from 'firebase';

type firebaseConfigTypes = {
    apiKey: undefined | string ,
    authDomain: undefined | string,
    projectId: undefined | string,
    storageBucket: undefined | string,
    messagingSenderId: undefined | string,
    appId: undefined | string
  }
const { REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN, 
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID, 
    REACT_APP_ID } = process.env;

const firebaseConfig: firebaseConfigTypes = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_ID
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 export default firebase;