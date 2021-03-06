import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKmdvC8mziqxgEAgRFTsVUrxJ71WecAAs",
    authDomain: "msocial-cc958.firebaseapp.com",
    projectId: "msocial-cc958",
    storageBucket: "msocial-cc958.appspot.com",
    messagingSenderId: "1011692441796",
    appId: "1:1011692441796:web:f989634ab1660a845d7991"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth=firebase.auth();
  const storage=firebase.storage();

  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider,storage};
     