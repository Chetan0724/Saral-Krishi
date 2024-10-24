import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signInWithPopup , GoogleAuthProvider , updateProfile} from "firebase/auth";

import {auth} from "../utils/firebase";
import { addUser } from "./userSlice";
import { userIcon } from "./constants";



export const signUp = (name, email, password, setErrorMessage, dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        // Update the profile with the user's display name
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            // Update the Redux store with the new user data
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: userIcon }));
          })
          .catch((error) => {
            setErrorMessage(error.message); // Handle profile update errors
          });
      })
      .catch((error) => {
        setErrorMessage(error.message); // Handle sign-up errors
      });
  };
  

export const signIn = (email, password, setErrorMessage) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // You can dispatch the user if you want to store the logged-in user in Redux.
        console.log('User signed in:', user);
      })
      .catch((error) => {
        setErrorMessage(error.message); // Handle sign-in errors
      });
  };
  

  export const googleLogin = (setErrorMessage, dispatch) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        
        // Dispatch user data to Redux store if needed
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName, photoURL: user.photoURL }));
  
      })
      .catch((error) => {
        setErrorMessage(error.message); // Handle Google sign-in errors
      });
  };
  