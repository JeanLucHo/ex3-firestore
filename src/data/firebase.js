import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg41zloqDvnieRUqiCmNui_HiVCSZc0OA",
  authDomain: "ex3-produits-a2b6c.firebaseapp.com",
  projectId: "ex3-produits-a2b6c",
  storageBucket: "ex3-produits-a2b6c.appspot.com",
  messagingSenderId: "941720093189",
  appId: "1:941720093189:web:a8dfcdc22b5b12c713926c",
  measurementId: "G-4PZN5CQ69X"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;