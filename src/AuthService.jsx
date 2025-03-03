import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from "firebase/auth";

// Signup User
export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  localStorage.setItem("loginTime", Date.now()); // Store the login time
  return getIdToken(userCredential.user);
};

// Login User
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  localStorage.setItem("loginTime", Date.now()); // Store the login time
  return getIdToken(userCredential.user);
};

// Check if the token is expired (30 minutes)
export const isTokenExpired = () => {
  const loginTime = localStorage.getItem("loginTime");
  if (loginTime) {
    const currentTime = Date.now();
    const timeDifference = currentTime - loginTime; // in milliseconds
    const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds

    if (timeDifference > thirtyMinutesInMs) {
      return true; // Token expired
    }
  }
  return false; // Token still valid
};

// Logout User
export const logout = async () => {
  await signOut(auth);
  localStorage.removeItem("loginTime"); // Clear the login time
};
