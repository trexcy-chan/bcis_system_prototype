
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA8FqIh9EOEriqJU4rMy8Y5mhzmdv9fOV0",
  authDomain: "authentication-610f4.firebaseapp.com",
  projectId: "authentication-610f4",
  storageBucket: "authentication-610f4.appspot.com",
  messagingSenderId: "813747026274",
  appId: "1:813747026274:web:69673771567b4c410e543b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const residentsColRef = collection(db, 'residents');
const clearanceColRef = collection(db, 'Clearance Requests');
const permitColRef = collection(db, 'Permit Requests');
const releasedColRef = collection(db, 'Released Requests');
const resident_adminColRef = collection(db, 'Residents Admin');
const AdminColRef = collection(db, 'Admin');

export { auth,residentsColRef,clearanceColRef,permitColRef,resident_adminColRef,releasedColRef, app,AdminColRef}