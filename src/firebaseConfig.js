import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, deleteDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkKAz-HFQB-2vxTEfQrAK79UImSRAwWpE",
  authDomain: "cinema-reserva-cultural.firebaseapp.com",
  projectId: "cinema-reserva-cultural",
  storageBucket: "cinema-reserva-cultural.firebasestorage.app",
  messagingSenderId: "126795714550",
  appId: "1:126795714550:web:ead014faca15a53b8581d7",
  measurementId: "G-YGG8L32QWM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db, deleteDoc, doc };