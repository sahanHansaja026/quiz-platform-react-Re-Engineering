// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtH1ELqBauuVO6KjBfT71atliv4N67hyk",
  authDomain: "scurd-e749c.firebaseapp.com",
  projectId: "scurd-e749c",
  storageBucket: "scurd-e749c.appspot.com",
  messagingSenderId: "224417967621",
  appId: "1:224417967621:web:ece2bb41a6b04a66be366c",
  measurementId: "G-CRXJ3S08N8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

// Export the services for use in other parts of the app
export { auth, analytics };
