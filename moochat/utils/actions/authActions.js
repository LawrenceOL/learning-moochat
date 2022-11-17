import { getFirebaseApp } from "../firebaseHelper";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const signUp = async (firstName, lastName, email, password) => {
  console.log(firstName, lastName, email, password);
  const app = getFirebaseApp();
  const auth = getAuth(app);

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = error.code;

    let message = "Something went wrong.";

    if (errorCode === "auth/email-already-in-use") {
      message = "This email is already in use";
    }

    throw new Error(message);
  }
};

export const signIn = (email, password) => {
  console.log(email, password);
};
