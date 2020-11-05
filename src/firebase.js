import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC17R8Fot3MUfexFtuMNCav1KVBcQ07yzA",
  authDomain: "devdevi-3d039.firebaseapp.com",
  databaseURL: "https://devdevi-3d039.firebaseio.com",
  projectId: "devdevi-3d039",
  storageBucket: "devdevi-3d039.appspot.com",
  messagingSenderId: "956603379013",
  appId: "1:956603379013:web:72d42ad0151ed79f17222c",
  measurementId: "G-6DYDSXTKRG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleAuthProvider }
export default db;