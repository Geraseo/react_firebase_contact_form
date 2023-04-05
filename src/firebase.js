import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGRNWmEkCU2hRoIOzdTvZIvQMYepDsF5U",
  authDomain: "kontaktai-415b8.firebaseapp.com",
  projectId: "kontaktai-415b8",
  storageBucket: "kontaktai-415b8.appspot.com",
  messagingSenderId: "700830670123",
  appId: "1:700830670123:web:73a45aa78b591c54f9396e",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
