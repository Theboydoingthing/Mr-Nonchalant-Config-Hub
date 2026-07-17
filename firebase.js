import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGTeWAqOwbWt7tUk2FBrGoGtFcEHG2oeo",
  authDomain: "mr-nonchalant-x-zora.firebaseapp.com",
  projectId: "mr-nonchalant-x-zora",
  storageBucket: "mr-nonchalant-x-zora.firebasestorage.app",
  messagingSenderId: "111549148105",
  appId: "1:111549148105:web:f8f647efd5160a9e105618",
  measurementId: "G-99YJFK9ZM5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
