import firebase from "firebase";

var firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "discord-clone-react-1c515.firebaseapp.com",
  projectId: "discord-clone-react-1c515",
  storageBucket: "discord-clone-react-1c515.appspot.com",
  messagingSenderId: "428559769591",
  appId: "1:428559769591:web:031b600e9519d23a61d8f2",
  measurementId: "G-2VRYRMNJRK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
